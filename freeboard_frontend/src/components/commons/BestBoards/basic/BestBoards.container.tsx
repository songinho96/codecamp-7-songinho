import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";
import BestBoardsPresenter from "./BestBoards.presenter";
import { FETCH_BOARDS_OF_THE_BEST } from "./BestBoards.quries";

export default function BestBoardsContainer() {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  console.log(data?.fetchBoardsOfTheBest.writer);
  const router = useRouter();

  const onClickBestImage = (event: MouseEvent<HTMLImageElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
    console.log(event.currentTarget.id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <BestBoardsPresenter
      data={data}
      settings={settings}
      onClickBestImage={onClickBestImage}
    />
  );
}
