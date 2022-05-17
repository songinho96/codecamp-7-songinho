import { useState } from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'



export default function BoardWrite() {
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  const [data, setData] = useState({})
  const [callGraphql] = useMutation(CREATE_BOARD)

  const onClickGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    
    const result = await callGraphql({
      variables: {
        writer: myWriter,
        title: myTitle,
        contents: myContents
      }
    })
    console.log(result)
    setData(result.data.createBoard)
  }

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value)
  }

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value)
  }

  const onChangeContents = (event) => {
    setMyContents(event.target.value)
  }



  return (
      <BoardWriteUI
        aaa={onChangeWriter} 
        onChangeTitle= {onChangeTitle}
        onChangeContents = {onChangeContents}
        onClickGraphqlApi = {onClickGraphqlApi}
        data={data}
      />
  )

}