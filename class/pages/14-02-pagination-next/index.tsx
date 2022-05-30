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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS); // refetch

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.targrt._id) }); // id가 String 이기 때문에 Number 로 바꿔준다.
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10); // 기존 페이지에다 + 10 을 해줘라
    refetch({ page: startPage + 10 });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage} 
          id={String(index + startPage)} // onClickPage 에서는 startPage가 안늘어 난다.
          onClick={onClickPage}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>

      {/* 인덱스 사용하기
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index)  => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}> {index + 1} </span>
      ))} */}

      {/* 맵 이용하기
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => (
        <span key={el} id={String(el)} onClick={onClickPage}> {el} </span>
      ))} */}

      {/* 그냥 써주기
      <span id="1" onClick={onClickPage}> 1 </span>
      <span id="2" onClick={onClickPage}> 2 </span>
      <span id="3" onClick={onClickPage}> 3 </span> */}
    </div>
  );
}
