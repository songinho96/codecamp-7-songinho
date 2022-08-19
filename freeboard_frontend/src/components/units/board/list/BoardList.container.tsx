import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useState } from "react";

export default function BoardList() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const { data: dataCount, refetch: refetchCount } =
    useQuery(FETCH_BOARDS_COUNT);
  // console.log(dataCount);

  const router = useRouter();

  const onClickMoveBoardDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
    // console.log(event.target);
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
      keyword={keyword}
      setKeyword={setKeyword}
      dataCount={dataCount}
      refetchCount={refetchCount}
    />
  );
}
