import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailPresenter from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
// FETCH_BOARD 작성후 const{data} 에 넣어줌

export default function StaticRoutedPage() {
  const router = useRouter();
  // useQuery()

  const number = router.query.number;
  // data는 변경 불가능
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(number) }, // 형변환 필요
  }); // import 필요

  return <BoardDetailPresenter data={data} number={number} />;
}
