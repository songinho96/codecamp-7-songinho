import { gql, useQuery } from "@apollo/client";

// FETCH_BOARD 작성후 const{data} 에 넣어줌
const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 4) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  // useQuery()
  // data는 변경 불가능
  const { data } = useQuery(FETCH_BOARD); // import 필요

  console.log(data);

  return (
    <div>
      <div>4번 페이지 이동이 완료되었습니다!!!</div>
      {/* 데이터랜더링 data가 없으면 뒤에꺼 보여주고 있으면 앞에꺼 보여준다 */}
      <div>작성자: {data?.fetchBoard.writer} </div>
      {/* 옵셔널 체이닝 : data? */}
      <div>제목: {data?.fetchBoard.title} </div>
      <div>
        내용: {data ? data.fetchBoard.contents : "조금만 기다려주세요..."}{" "}
      </div>
    </div>
  );
}
