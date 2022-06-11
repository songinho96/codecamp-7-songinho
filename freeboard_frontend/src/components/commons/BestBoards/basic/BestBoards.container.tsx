import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import BestBoardsPresenter from "./BestBoards.presenter";
import { FETCH_BOARDS_OF_THE_BEST } from "./BestBoards.quries";

export default function BestBoardsContainer() {
  const { data } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  console.log(data?.fetchBoardsOfTheBest.writer);
  const router = useRouter();

  const onClickBestImage = (event) => {
    router.push(`/boards/${event.target.id}`);
    console.log(event.target.id);
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