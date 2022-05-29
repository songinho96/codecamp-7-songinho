import { useQuery } from "@apollo/client";
import { useState } from "react";

import PaginationbasicUI from "./Paginationsbasic.presenter";
import { FETCH_BOARDS_COUNT } from "./Paginationsbasic.queries";

export default function Paginationbasic(props) {
  const { data } = useQuery(FETCH_BOARDS_COUNT);
  const [startPage, setStartPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [activePage, setActivePage] = useState();

  const lastPage = Math.ceil(data?.fetchBoardsCount / 10);

  const onClickStart = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - startPage + 1);
    setActivePage(1);
    props.refetch({ page: 1 });
  };

  const onClickLast = () => {
    let endPage = 0;
    for (let i = 1; i + 10 < lastPage; i += 10) {
      endPage = i + 10;
    }

    if (startPage + 10 > lastPage) return;
    setStartPage(endPage);
    setActivePage(endPage);
    props.refetch({
      page: endPage,
    });
  };

  const onClickPage = (event) => {
    const activePage = Number(event.target.id);
    setActivePage(activePage);
    props.refetch({ page: Number(event.target.id) });
    setIsActive(true);
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setActivePage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNext = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
    setActivePage(startPage + 10);
  };
  return (
    <PaginationbasicUI
      onClickNext={onClickNext}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      lastPage={lastPage}
      startPage={startPage}
      isActive={isActive}
      activePage={activePage}
      onClickStart={onClickStart}
      onClickLast={onClickLast}
    />
  );
}
