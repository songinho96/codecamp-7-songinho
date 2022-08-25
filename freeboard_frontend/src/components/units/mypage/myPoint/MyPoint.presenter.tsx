import React from "react";
import AllPointPresenter from "./allPoint/AllPoint.presenter";
import PaginationAllPoint from "./allPoint/pagination/Paginationsbasic.container";
import ChargePointPresenter from "./chargePoint/ChargePoint.presenter";
import PaginationChargePoint from "./chargePoint/pagination/Paginationsbasic.container";
import * as S from "./MyPoint.styles";
import { IMyPointPresenterProps } from "./MyPoint.types";
import PaidPointPresenter from "./paidPoint/PaidPoint.presenter";
import PaginationSellPoint from "./sellPoint/pagination/Paginationsbasic.container";
import SellPointPresenter from "./sellPoint/SellPoint.presenter";

export default function MyPointPresenter(props: IMyPointPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.WrapTop>
          <S.TopAll
            onClick={props.onClickFetchAllPoint}
            isPoint={props.isPoint}
          >
            전체 내역
          </S.TopAll>
          <S.TopCharge
            onClick={props.onClickFetcChargePoint}
            isPoint={props.isPoint}
          >
            충천 내역
          </S.TopCharge>
          <S.TopPaid
            onClick={props.onClickFetchPaidPoint}
            isPoint={props.isPoint}
          >
            구매 내역
          </S.TopPaid>
          <S.TopSell
            onClick={props.onClickFetchSellPoint}
            isPoint={props.isPoint}
          >
            판매 내역
          </S.TopSell>
        </S.WrapTop>
        {props.isPoint === "AllPoint" && (
          <>
            <S.ListTitleRow>
              <S.TItleDateRow>날짜</S.TItleDateRow>
              <S.TItleStatusRow>내용</S.TItleStatusRow>
              <S.TItleChargeRow>거래 및 충전 내역</S.TItleChargeRow>
              <S.TItleMoneyRow>잔액</S.TItleMoneyRow>
            </S.ListTitleRow>
            <AllPointPresenter allData={props.allData} />
            <PaginationAllPoint
              refetch={props.allRefetch}
              dataCount={props.allCount}
            />
          </>
        )}
        {props.isPoint === "ChargePoint" && (
          <>
            <S.ListTitleRow>
              <S.TItleDateRow>충전일</S.TItleDateRow>
              <S.TItleStatusRow>결제 ID</S.TItleStatusRow>
              <S.TItleChargeRow>충전 내역</S.TItleChargeRow>
              <S.TItleMoneyRow>충전 후 잔액</S.TItleMoneyRow>
            </S.ListTitleRow>
            <ChargePointPresenter chargeData={props.chargeData} />
            <PaginationChargePoint
              refetch={props.chargeRefetch}
              dataCount={props.chargeCount}
            />
          </>
        )}
        {props.isPoint === "PaidPoint" && (
          <>
            <S.ListTitleRow>
              <S.TItleDateRow>거래일</S.TItleDateRow>
              <S.TItleStatusRow>상품명</S.TItleStatusRow>
              <S.TItleChargeRow>거래 내역</S.TItleChargeRow>
              <S.TItleMoneyRow>거래 후 잔액</S.TItleMoneyRow>
              <S.TitleSellerRow>판매자</S.TitleSellerRow>
            </S.ListTitleRow>
            <PaidPointPresenter paidData={props.paidData} />
          </>
        )}
        {props.isPoint === "SellPoint" && (
          <>
            <S.ListTitleRow>
              <S.TItleDateRow>거래일</S.TItleDateRow>
              <S.TItleStatusRow>상품명</S.TItleStatusRow>
              <S.TItleChargeRow>거래 내역</S.TItleChargeRow>
              <S.TItleMoneyRow>잔액 후 잔액</S.TItleMoneyRow>
            </S.ListTitleRow>
            <SellPointPresenter sellData={props.sellData} />
            <PaginationSellPoint
              refetch={props.sellRefetch}
              dataCount={props.sellCount}
            />
          </>
        )}
      </S.Wrapper>
    </>
  );
}
