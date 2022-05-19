// import { useState } from 'react'
// import { gql, useMutation } from '@apollo/client'

// const CREATE_BOARD = gql`
//   mutation  createBoard($writer: String, $title: String, $contents: String){
//             createBoard(writer: $writer, title: $title, contents: $contents){
//       _id
//       number
//       message
//     }
//   }
// `


// export default function GraphqlMutationPage() {

//   const [data, setData] = useState("")
//   const [callGraphql] = useMutation(CREATE_BOARD)

//   const onClickGraphqlApi = async () => {
//     // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    
//     const result = await callGraphql({
//       variables: {
//         writer: "철수",
//         title: "제목입니다~~~",
//         contents: "내용이에요!!!"
//       }
//     })
//     console.log(result)
//     setData(result.data.createBoard.message)

//   }

//   return (
//     <div>
//       <div>{data}</div>
//       <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
//     </div>
//   )

// }

import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer:String, $title:String, $contents: String) {
            createBoard(writer:$writer, title:$title, contents:$contents){
    message
    _id
    number
  }
}
`


export default function GraphqlMutationPage() {
  const [ data,setData] = useState()
  const [callGraphql] = useMutation(CREATE_BOARD)

  const onClickGraphqlApi = async () => {   
    const result = await callGraphql({ // result callGraphql을 useMutation 해서 variables에 있는 값을 기다려서 요청
      variables: {
        writer: "철수", // $writer랑 같은 변수를 사용
        title: "하하",
        contents: "호호"
      }
    })
    console.log(result)
    setData(result.data.createBoard.message)

  }


  return (
    <div>
      <div>{ data }</div>
      <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
    </div>
  )
}
