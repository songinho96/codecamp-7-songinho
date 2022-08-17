import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import MyPointPresenter from "./MyPoint.presenter";
import { FETCH_POINT_TRANSACTIONS } from "./MyPoint.queries";

export default function MyPointContainer() {
  const [isPoint, setIsPoint] = useState("AllPoint");
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);
  console.log(data);
  const onClickFetchAllPoint = () => {
    setIsPoint("AllPoint");
  };

  const onClickFetcChargePoint = () => {
    setIsPoint("ChargePoint");
  };

  const onClickFetchPaidPoint = () => {
    setIsPoint("PaidPoint");
  };

  const onClickFetchSellPoint = () => {
    setIsPoint("SellPoint");
  };

  return (
    <MyPointPresenter
      isPoint={isPoint}
      onClickFetchAllPoint={onClickFetchAllPoint}
      onClickFetcChargePoint={onClickFetcChargePoint}
      onClickFetchPaidPoint={onClickFetchPaidPoint}
      onClickFetchSellPoint={onClickFetchSellPoint}
    />
  );
}
