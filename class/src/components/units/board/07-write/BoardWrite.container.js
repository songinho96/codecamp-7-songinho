import { useState } from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'



export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false)


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

    // if ( myWriter && myTitle && myContents ){
    //   setIsActive(true)
    // } else {
    //   setIsActive(false)
    // }
  }

  const onChangeWriter = (event) => {
    setMyWriter(event.target.value)
    if ( event.target.value  && myTitle && myContents ){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
    
    
  }

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value)
    if ( myWriter  && event.target.value && myContents ){
      setIsActive(true)
    } else {
      setIsActive(false) 
    }
    
  }

  const onChangeContents = (event) => {
    setMyContents(event.target.value)
    if ( myWriter  && myTitle && event.target.value ){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }





  return (
      <BoardWriteUI
        aaa={onChangeWriter} 
        onChangeTitle= {onChangeTitle}
        onChangeContents = {onChangeContents}
        onClickGraphqlApi = {onClickGraphqlApi}
        data={data}
        isActive={isActive}
      />
  )

}