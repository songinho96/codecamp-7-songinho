import {useRouter} from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'

export default function BoardWrite() {

  const router = useRouter()

  const onClickMove1 = () => {
    router.push("/05-06-dynamic-routed-board/4") // localhost:3000 까지는 무시
  }

  const onClickMove2 = () => {
    router.push("/05-06-dynamic-routed-board/5") // localhost:3000 까지는 무시
  }

  const onClickMove3 = () => {
    router.push("/05-06-dynamic-routed-board/7") // localhost:3000 까지는 무시
  }

  return (
    <BoardWriteUI
      onClickMove1 = {onClickMove1}
      onClickMove2 = {onClickMove2}
      onClickMove3 = {onClickMove3}
      />
  )
}