import React from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ChargePoint.styles";
import { IAllPointPresenterProps, Iel } from "./ChargePoint.types";

export default function ChargePointPresenter(props: IAllPointPresenterProps) {
  return (
    <>
      {props.chargeData?.fetchPointTransactionsOfLoading.map((el: Iel) => (
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
