import { useState } from "react";
import { useMutation} from '@apollo/client'
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';



export default function BoardWrite(props) {
  // router
  const router = useRouter()

  const [isActive, setIsActive] = useState(false)
  
 

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  // GRAPHQL-API
  const [callGraphql] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)
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

    if( event.target.value && password && title && contents){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if( writer && event.target.value && title && contents){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if( writer && password && event.target.value && contents){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if( writer && password && title && event.target.value){
      setIsActive(true)
    } else {
      setIsActive(false)
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
    alert("게시글이 등록되었습니다.");
    router.push(`/board-cloneGraph-dynamicRouted/${result.data.createBoard._id}`)
        }
    catch(error) {
      console.log(error.message)
      alert(error.message)
    }
  }
}

  const onClickUpdate = async() => {
    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: password,
          updateBoardInput: {
            title: title,
            contents: contents
          }
        }
      })
      alert("게시글이 수정되었습니다.")
      router.push(`/board-cloneGraph-dynamicRouted/${router.query.boardId}`)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      writerError={writerError}
      titleError={titleError}
      passwordError={passwordError}
      contentsError={contentsError}
      isActive = {isActive}
      isEdit={props.isEdit}
    />

  )
}
