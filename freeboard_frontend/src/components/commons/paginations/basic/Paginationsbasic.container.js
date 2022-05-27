import { useQuery } from "@apollo/client";
import { useState } from "react";

import PaginationbasicUI from "./Paginationsbasic.presenter";
import { FETCH_BOARDS_COUNT } from "./Paginationsbasic.queries";

export default function Paginationbasic(props) {
  const { data } = useQuery(FETCH_BOARDS_COUNT);
  const [startPage, setStartPage] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const lastPage = Math.ceil(data?.fetchBoardsCount / 10);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setIsActive(true);
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNext = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <PaginationbasicUI
      onClickNext={onClickNext}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      lastPage={lastPage}
      startPage={startPage}
    />
  );
}
