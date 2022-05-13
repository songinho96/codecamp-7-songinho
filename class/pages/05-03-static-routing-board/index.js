import {useRouter} from 'next/router'

export default function StaticRoutingPage() {

  const router = useRouter()

  const onClickMove1 = () => {
    router.push("/05-04-static-routed-board/4") // localhost:3000 까지는 무시
  }

  const onClickMove2 = () => {
    router.push("/05-04-static-routed-board/5") // localhost:3000 까지는 무시
  }

  const onClickMove3 = () => {
    router.push("/05-04-static-routed-board/7") // localhost:3000 까지는 무시
  }

  return (
    // frahment
    <> 
      <button onClick={onClickMove1}>4번 게시글 이동하기!!!</button>
      <button onClick={onClickMove2}>5번 게시글 이동하기!!!</button>
      <button onClick={onClickMove3}>7번 게시글 이동하기!!!</button>
    </>

  )
}