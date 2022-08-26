import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import MyPointPresenter from "./MyPoint.presenter";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LODING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./MyPoint.queries";

export default function MyPointContainer() {
  const [isPoint, setIsPoint] = useState("AllPoint");
  const { data: allData, refetch: allRefetch } = useQuery(
    FETCH_POINT_TRANSACTIONS
  );

  const { data: chargeData, refetch: chargeRefetch } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING
  );
  const { data: chargeCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LODING
  );
  const { data: paidData, refetch: paidRefetch } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING
  );
  const { data: paidCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING
  );
  const { data: sellData, refetch: sellRefetch } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_SELLING
  );
  const { data: sellCount } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING
  );

  const allCount =
    sellCount?.fetchPointTransactionsCountOfSelling +
    paidCount?.fetchPointTransactionsCountOfBuying +
    chargeCount?.fetchPointTransactionsCountOfLoading;

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
      // 데이타
      allData={allData}
      chargeData={chargeData}
      paidData={paidData}
      sellData={sellData}
      // 리패치
      allRefetch={allRefetch}
      chargeRefetch={chargeRefetch}
      paidRefetch={paidRefetch}
      sellRefetch={sellRefetch}
      chargeCount={chargeCount}
      paidCount={paidCount}
      sellCount={sellCount}
      allCount={allCount}
    />
  );
}
