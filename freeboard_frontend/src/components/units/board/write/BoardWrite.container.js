import { useState } from "react";
import { useMutation} from '@apollo/client'
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREAT_BOARD } from './BoardWrite.queries';



export default function BoardWrite() {
  // router
  const router = useRouter()


  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // GRAPHQL-API
  const [callGraphql] = useMutation(CREAT_BOARD)
  // GRAPHQL-API

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };
  
  // onCLick
  const onClickSubmit = async () => {
    // 참과 거짓!

    // 거짓
    // false
    // ""
    // 숫자 0
    // undefined
    // null
    // Not a Number(NaN)





    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    //!contents === contents === ""
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      alert("게시글이 등록되었습니다.");
    

    // router
    try {
      const result = await callGraphql({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents
          }
        }
      })
    console.log(result)

    router.push(`/board-cloneGraph-dynamicRouted/${result.data.createBoard._id}`)
        }
    catch(error) {
      console.log(error.message)
      alert(error.message)
    }
  }
}

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      writerError={writerError}
      titleError={titleError}
      passwordError={passwordError}
      contentsError={contentsError}
      

    />

  )
}
