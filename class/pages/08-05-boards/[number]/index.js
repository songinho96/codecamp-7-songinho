import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// FETCH_BOARD 작성후 const{data} 에 넣어줌
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();
  console.log(router);

  // router.query.number

  // useQuery()
  // data는 변경 불가능
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }, // 형변환 필요
  }); // import 필요

  console.log(data);

  const onClickMoveToEdit = () => {
    router.push(`/08-05-boards/${router.query.number}/edit`);
  };

  return (
    <div>
      <div>{router.query.number}번 페이지 이동이 완료되었습니다!!!</div>
      {/* 데이터랜더링 data가 없으면 뒤에꺼 보여주고 있으면 앞에꺼 보여준다 */}
      <div>작성자: {data?.fetchBoard.writer} </div>
      {/* 옵셔널 체이닝 : data? */}
      <div>제목: {data?.fetchBoard.title} </div>
      <div>
        내용: {data ? data.fetchBoard.contents : "조금만 기다려주세요..."}{" "}
      </div>

      <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
    </div>
  );
}
