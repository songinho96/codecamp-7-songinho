import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// import React, { useState } from "react";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardList() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

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
      refetch={refetch}
    />
  );
}
