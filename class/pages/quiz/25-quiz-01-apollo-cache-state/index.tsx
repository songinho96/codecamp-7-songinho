import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { filter } from "lodash";
import React from "react";
import { useForm } from "react-hook-form";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
`;

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function ApolloCacheStateQuiz() {
  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { register, handleSubmit } = useForm();

  const onClickSubmit = async (data) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARDS
      //   }
      // ]
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
    console.log(result);
    console.log(data);
  };

  const onClickDelete = (boardId: String) => async () => {
    await deleteBoard({
      variables: {
        boardId,
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARDS,
      //   },
      // ],

      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard;

              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>목록</div>
      {data?.fetchBoards.map((el: any, index: any) => (
        <Row key={el._id}>
          <Column>{index + 1}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </Row>
      ))}
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <Input type="text" {...register("writer")} />
        비밀번호: <Input type="password" {...register("password")} />
        제목: <Input type="text" {...register("title")} />
        내용: <Input type="text" {...register("contents")} />
        <button>등록하기</button>
      </form>
    </>
  );
}
