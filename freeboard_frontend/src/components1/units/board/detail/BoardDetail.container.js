
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardDetailPresenter from './BoardDetail.presenter'
import { FETCH_BOARD } from './BoardDetail.queries'




export default function DetailPage() {
  
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId},  //일반적으로 똑같이 씀 boardId
  })   // 모두 한줄  FETCH_BOARD요청 data에 저장, 처음에 undefined => data

  console.log(data)

  const onClickMoveToBoardList = () => {
    router.push("/board-cloneGraph-list")
  }

  const onClickMoveToBoardEdit = () => {
    router.push(`/board-cloneGraph-dynamicRouted/${router.query.boardId}/edit`)
    console.log('aaaa')
  }

  const onclickMove = () => {
    console.log('asd')
  }


  return (
      <BoardDetailPresenter
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onclickMove={onclickMove}
      />
  )


}