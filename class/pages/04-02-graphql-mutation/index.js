// import { useState } from 'react'
// import { gql, useMutation } from '@apollo/client'

// const CREATE_BOARD = gql`
//   mutation{
//     createBoard(writer:"철수",title:"제목입니다~",contents:"내용이에요!!!"){
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
    
//     const result = await callGraphql()
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
mutation {
  createBoard(writer:"하하", title:"호호호", contents:"웃자"){
    message
    _id
    number
  }
}
`

export default function GraphqlMutationPage() {
  

  const [data,setData] = useState()
  const [Callgraphql] = useMutation(CREATE_BOARD)

  const onClickGraphqlAPI = async () => {
    const result = await Callgraphql()
    console.log(result)
    setData(result.data.createBoard.number)

  }


  return (
    <div>
      <div>{data}</div>
      <button onClick={onClickGraphqlAPI}>Graphql-API 요청하기</button>
    </div>
  )
}
