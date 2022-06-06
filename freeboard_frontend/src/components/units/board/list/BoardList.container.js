import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import _ from "lodash";
// import React, { useState } from "react";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useState } from "react";

export default function BoardList() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const router = useRouter();

  const onClickMoveBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
    console.log(event.target);
  };

  const onClickMoveBoardNew = () => {
    router.push(`/boards/new`);
  };

  const getDebounce = _.debounce((searchData) => {
    refetch({ search: searchData, page: 1 });
    setKeyword(searchData);
  }, 200);

  const onChangeSearch = (event) => {
    getDebounce(event.target.value);
  };
  return (
    <BoardListUI
      data={data}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
      onClickMoveBoardNew={onClickMoveBoardNew}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
    />
  );
}
