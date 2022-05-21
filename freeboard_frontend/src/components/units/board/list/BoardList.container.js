import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickMoveBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  const onClickMoveBoardNew = () => {
    router.push(`/boards/new`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
      onClickMoveBoardNew={onClickMoveBoardNew}
    />
  );
}
