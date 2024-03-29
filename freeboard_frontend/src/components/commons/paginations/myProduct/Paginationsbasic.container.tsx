import { MouseEvent, useState } from "react";
import PaginationbasicUI from "./Paginationsbasic.presenter";
import { IPaginationMyProductProps } from "./Paginationsbasic.types";

export default function PaginationMyProduct(props: IPaginationMyProductProps) {
  const [startPage, setStartPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const lastPage = props.soldCount?.fetchUseditemsCountISold
    ? Math.ceil(props.soldCount?.fetchUseditemsCountISold / 10)
    : 0;

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

  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    props.refetch({ page: Number(event.currentTarget.id) });
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
      soldCount={props.soldCount}
    />
  );
}
