import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";
import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

// FETCH_BOARD 작성후 const{data} 에 넣어줌
const FETCH_BOARD = gql`  
  query fetchBoard($number: Int) {
    fetchBoard(number: $number){
      number
      writer
      title
      contents
    }
  }
`

export default function BoardEditPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number:Number(router.query.number)} // 형변환 필요
  }) //import 필요

  // data.fetchBoard.writer

  return (
    <BoardWrite isEdit={true} boardData={data}/>

  )
}