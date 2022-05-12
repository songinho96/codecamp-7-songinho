import { gql, useMutation} from  '@apollo/client'

const CREATE_BOARD = gql`
  mutation  createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    } 
  }
`


export default function Qiuz4_2() {

  const [callGraphql] = useMutation(CREATE_BOARD)

  const onClickGraphqlApi = async () => {

    const result = await callGraphql({
      variables: {
        writer: "송인호",
        title: "과제제출",
        contents: "어렵다!!!"
      }
    })
    console.log(result)

  }


  return (
    <div>
      <button onClick={onClickGraphqlApi}>GRAPHQL-API 요청하기</button>
    </div>

  )


}