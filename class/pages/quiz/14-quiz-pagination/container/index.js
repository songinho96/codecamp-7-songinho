import { useQuery } from "@apollo/client";
import { useState } from "react";
import PaginationPresenter from "../presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "../queries";

export default function PaginationContainer(props) {
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const [startPage, setStartPage] = useState(1);
  const [clickPage, setClickPage] = useState();
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });

  const onClickPage = (event) => {
    if (Number(event.target.id)) {
      setClickPage(event.target.id);
    }
    refetch({ page: Number(event.target.id) });
    // console.log(event.target.id);
    // console.log(event.currentTarget.id);
    console.log(setClickPage);
  };
  // 이전 페이지 클릭 시 실행할 함수
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    // refetch({ page: startPage - 10 });
  };
  // 다음 페이지
  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    // refetch({ page: startPage + 10 });
  };

  return (
    <PaginationPresenter
      onClickPage={onClickPage}
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
      data={data}
      dataBoardsCount={dataBoardsCount}
      lastPage={lastPage}
      startPage={startPage}
      clickPage={clickPage}
    />
  );
}
