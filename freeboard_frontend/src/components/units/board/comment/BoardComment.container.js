import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BoardCommentUI from "./BoardComment.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardComment.queries";

export default function BoardComment(props) {
  // Antd

  // isActive
  const [isActive, setIsActive] = useState(false);
  // useState
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(3);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // Mutation
  const router = useRouter();
  const [createBoardComments] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  // console.log(data);
  // console.log(router);
  // detail페이지의 boardId 가져옴

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    // setIsActive
    if (event.target.value && password && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (event.target.value && writer && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (event.target.value && password && writer) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // StarRating
  const handleChange = (value) => {
    setValue(value);
  };

  const onClickComments = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }

    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }

    if (writer && password && contents) {
      alert("댓글 등록 성공!");
      try {
        const result = await createBoardComments({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: value,
            },
            boardId: router.query.boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        console.log("aaa" + result);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
  };

  const onClickDelete = async (event) => {
    try {
      const myPassword = prompt("비밀번호");
      await deleteBoardComment({
        variables: {
          boardCommentId: event.target.id,
          password: myPassword,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  // Antd

  return (
    <BoardCommentUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickComments={onClickComments}
      onClickDelete={onClickDelete}
      writerError={writerError}
      passwordError={passwordError}
      contentsError={contentsError}
      data={data}
      isActive={isActive}
      contents={contents}
      handleChange={handleChange}
      value={value}
    />
  );
}
