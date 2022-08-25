import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent, useState } from "react";

export default function BoardList() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const { data: dataCount, refetch: refetchCount } =
    useQuery(FETCH_BOARDS_COUNT);
  // console.log(dataCount);

  const router = useRouter();

  const onClickMoveBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
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
      refetchCount={refetchCount}
      keyword={keyword}
      setKeyword={setKeyword}
      dataCount={dataCount}
    />
  );
}
