import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS); // refetch
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10); // 옵셔널체이닝 걸어주어야 한다.

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.targrt.id) }); // id가 String 이기 때문에 Number 로 바꿔준다.
    console.log(event.taget.id);
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      // startPage + 10 이 lastPage 보다 작을 때 실행
      setStartPage((prev) => prev + 10); // 기존 페이지에다 + 10 을 해줘라
      refetch({ page: startPage + 10 });
    }
    console.log(data);
  };

  return (
    <div style={{ margin: "20px" }}>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage} // {0 + 11}, {1 + 11}, {2 + 11} 처럼 늘어난다.
              id={String(index + startPage)} // onClickPage 에서는 startPage가 안늘어 난다.
              onClick={onClickPage}
            >
              {" "}
              {index + startPage}
            </span>
          )
      )}

      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}

//   return (
//     <>
//       <div>
//         {data?.fetchBoards.map((el: any) => (
//           <MyRow key={el._id}>
//             <MyColumn>{el.writer}</MyColumn>
//             <MyColumn>{el.title}</MyColumn>
//           </MyRow>
//         ))}

//         <div onClick={onClickPrevPage}>이전페이지</div>
//         <div>
//           {new Array(10).fill(1).map(
//             (_, index) =>
//               index + startPage <= lastPage && (
//                 <span
//                   key={index + startPage} // {0 + 11}, {1 + 11}, {2 + 11} 처럼 늘어난다.
//                   id={String(index + startPage)} // onClickPage 에서는 startPage가 안늘어 난다.
//                   onClick={onClickPage}
//                 >
//                   {" "}
//                   {index + startPage}
//                 </span>
//               )
//           )}
//         </div>
//         <span onClick={onClickNextPage}>다음페이지</span>
//       </div>
//     </>
//   );
// }
