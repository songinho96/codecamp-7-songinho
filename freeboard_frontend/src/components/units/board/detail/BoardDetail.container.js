import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from "./BoardDetail.presenter"
import { FETCH_BOARD } from "./BoardDetail.queries"


export default function BoardDetail() {
  const router = useRouter()
  console.log("aa", router)

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId}  //일반적으로 똑같이 씀 boardId
  })   // 모두 한줄  FETCH_BOARD요청 data에 저장, 처음에 undefined => data

  console.log(data)

  return (
    <BoardDetailUI
    data={data}
    />
  )

}
