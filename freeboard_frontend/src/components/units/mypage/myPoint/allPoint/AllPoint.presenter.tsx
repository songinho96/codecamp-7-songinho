import React from "react";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./AllPoint.styles";
import { IAllPointPresenterProps, Iel } from "./AllPoint.types";

export default function AllPointPresenter(props: IAllPointPresenterProps) {
  return (
    <>
      {props.allData?.fetchPointTransactions.map((el: Iel) => (
        <S.WrapList key={el._id}>
          <S.DateColume>{getDate(el.createdAt)}</S.DateColume>
          <S.StatusColume>{el.status}</S.StatusColume>
          <S.ChargeColume>{el.amount.toLocaleString("ko-KR")}</S.ChargeColume>
          <S.MoneyColume>₩{el.balance.toLocaleString("ko-KR")}</S.MoneyColume>
        </S.WrapList>
      ))}
    </>
  );
}
