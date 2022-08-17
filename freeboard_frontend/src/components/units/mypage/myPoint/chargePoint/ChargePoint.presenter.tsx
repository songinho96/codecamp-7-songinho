import React from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ChargePoint.styles";

export default function ChargePointPresenter(props) {
  return (
    <>
      {props.chargeData?.fetchPointTransactionsOfLoading.map((el) => (
        <S.WrapList key={el._id}>
          <S.DateColume>{getDate(el.createdAt)}</S.DateColume>
          <S.StatusColume>{el.status}</S.StatusColume>
          <S.ChargeColume>{el.amount}</S.ChargeColume>
          <S.MoneyColume>₩{el.balance.toLocaleString("ko-KR")}</S.MoneyColume>
        </S.WrapList>
      ))}
    </>
  );
}
