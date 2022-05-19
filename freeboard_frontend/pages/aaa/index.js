import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
  mutation  createBoard($writer: String, $title: String, $contents: String){
            createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`


export default function GraphqlMutationPage() {
    const router = useRouter() //05.13


  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  const [data, setData] = useState({})
  const [callGraphql] = useMutation(CREATE_BOARD)

  const onClickGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식

    try { // try {} catch() {}  백엔드에서 에러가 있으면 
      const result = await callGraphql({
        variables: {
          writer: myWriter,
          title: myTitle,
          contents: myContents
        }
      })
      console.log(result)
      // setData(result.data.createBoard)
      router.push(`/05-06-dynamic-routed-board/${result.data.createBoard.number}`)  // 05.13
    }
      catch(error) {
      console.log(error)
      alert(error.message)
    }
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
    <div>
      작성자: <input type = "text" onChange={onChangeWriter} />
      제목: <input type = "text" onChange={onChangeTitle} />  
      내용: <input type = "text" onChange={onChangeContents} />
      <div>{data.number}</div>
      <div>{data._id}</div>
      <div>{data.message}</div>
      <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
    </div>
  )

}

