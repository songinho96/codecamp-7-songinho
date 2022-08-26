import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";

import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";

import { Modal } from "antd";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  IBoardCommentWriteProps,
  IUpdateBoardCommentInput,
} from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
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
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  // console.log(data);
  // console.log(router);
  // detail페이지의 boardId 가져옴

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
  const handleChange = async (value: any) => {
    setValue(value);
  };

  // onClickComments
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
      Modal.success({
        title: "댓글 등록 성공!!",
        content: "댓글이 등록 되었습니다!",
      });
      try {
        await createBoardComments({
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
      } catch (error) {
        Modal.error({
          title: "댓글 등록 실패!!",
          content: "댓글 등록에 실패 했습니다!",
        });
      }
    }
  };

  // onCLickUpdate
  const onClickBackButton = () => {
    props.setIsEdit(false);
  };

  const onClickUpdate = async () => {
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }

    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;
    if (value !== props.el?.rating) updateBoardCommentInput.rating = value;

    if (password && contents) {
      try {
        await updateBoardComment({
          variables: {
            updateBoardCommentInput,
            password,
            boardCommentId: props.editId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        Modal.success({
          title: "댓글 수정 성공!!",
          content: "댓글이 수정 되었습니다!",
        });
      } catch (error) {
        Modal.error({
          title: "Error 메시지",
          content: "비밀번호가 틀렸습니다!",
        });
      }
      props.setIsEdit?.(false); // 있을수도 있고 없을 수도 있다. 등록으로 쓰일 때는 setisEdit이 없기 때문에
    }
  };

  return (
    <p>
      <BoardCommentWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onClickComments={onClickComments}
        onClickUpdate={onClickUpdate}
        onClickBackButton={onClickBackButton}
        writerError={writerError}
        passwordError={passwordError}
        contentsError={contentsError}
        data={data}
        isActive={isActive}
        contents={contents}
        handleChange={handleChange}
        value={value}
        setValue={setValue}
        // Modal
        isEdit={props.isEdit}
        el={props.el}
      />
    </p>
  );
}
