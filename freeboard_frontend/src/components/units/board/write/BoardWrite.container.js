import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'




export default function BoardWrite() {
  const router = useRouter()
  const [callGraphql] = useMutation(CREATE_BOARD)

  // useState onChagne
  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  // useState Error
  const [writerError, setWriterError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [titleError, setTitleError] = useState("")
  const [contentsError, setContentsError] = useState("")

  // onChange()
  const onChangeWriter = (event) => {
    setWriter(event.target.value)
    if (event.target.value === "") {
      setWriterError("")
  }
}

  const onChangePassword = (event) => {
    setPassword(event.target.value)
    if (event.target.value === "") {
      setPasswordError("")
  }
}

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    if (event.target.value !== "") {
      setTitleError("")
  }
}

  const onChangeContents= (event) => {
    setContents(event.target.value)
    if (event.target.value !== "") {
      setContentsError("")
  }
}

  const onClickSubmit = async () => {
  

    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.")
    }

    if (title === "") {
      setTitleError("제목을 입력해주세요.")
    }

    if (contents === "") {
      setContentsError("내용을 입력해주세요.")
    }

    if (writer !== "" && password !== "" && title !== "" && contents !== "") {
      alert("게시글이 등록되었습니다.")
      try{
      const result = await callGraphql({
        variables:{ 
          createBoardInput: {
            writer,
            password,
            contents, 
            title
          }
        }
      })
    router.push(`/boards/${result.data.createBoard._id}`)
      } catch(error) {
        console.log(error)
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
    passwordError={passwordError}
    titleError={titleError}
    contentsError={contentsError}
    />
  )

}
