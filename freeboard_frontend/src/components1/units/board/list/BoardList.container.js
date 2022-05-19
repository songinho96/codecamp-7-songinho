import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS)
  const router = useRouter()

  const onClickMoveToBoardNew = () => {
    router.push("/board-cloneGraph")
  }

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/board-cloneGraph-dynamicRouted/${event.target.id}`)
  }

  

  return (
    <BoardListUI 
      data={data}
      onClickMoveToBoardNew ={onClickMoveToBoardNew}
      onClickMoveToBoardDetail ={onClickMoveToBoardDetail}
    />
  )
}