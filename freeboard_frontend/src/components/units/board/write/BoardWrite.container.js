import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { Modal } from "antd";

export default function BoardWrite(props) {
  // isActive 버튼 색 바꾸기
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const [callGraphql] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // useState onChagne
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  // useState Error
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // onChange()
  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    // setIsActive
    if (event.target.value && password && title && contents) {
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

    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (writer && password && event.target.value && contents) {
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

    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutube = (event) => {
    setYoutubeUrl(event.target.value);
    // console.log(setYoutubeUrl);
  };

  // onClickSubmit
  const onClickSubmit = async () => {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }

    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }

    if (contents === "") {
      setContentsError("내용을 입력해주세요.");
    }

    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      Modal.success({
        title: "게시글 등록 성공!!",
        content: "게시글이 등록 되었습니다!",
      });
      try {
        const result = await callGraphql({
          variables: {
            createBoardInput: {
              writer,
              password,
              contents,
              title,
              youtubeUrl,
            },
          },
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      Modal.error({
        title: "Error 메시지",
        content: "수정한 내용이 없습니다!",
      });
      return;
    }

    if (!password) {
      Modal.error({
        title: "Error 메시지",
        content: "비밀번호를 입력해주세요!",
      });
      return;
    }

    const updateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      Modal.success({
        title: "게시글 수정 성공!!",
        content: "게시글이 수정 되었습니다!",
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
      // router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      Modal.error({
        title: "Error 메시지",
        content: "비밀번호가 틀렸습니다!",
      });
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeYoutube={onChangeYoutube}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      boardData={props.boardData}
    />
  );
}
