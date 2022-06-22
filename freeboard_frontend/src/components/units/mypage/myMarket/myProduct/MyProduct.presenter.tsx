import React from "react";
import { getDate } from "../../../../commons/libraries/utils";
import SearchbarMymarketContainer from "../../../../commons/searchbars/myMarket/SearchbarMymarket.container";

import * as S from "./MyProduct.styles";

export default function MyProductPresenter(props) {
  return (
    <S.Wrapper>
      <SearchbarMymarketContainer refetch={props.refetch} />
      <S.TableRow>
        <S.Index>번호</S.Index>
        <S.Name>상품명</S.Name>
        <S.IsBuyer></S.IsBuyer>
        <S.Price>가격</S.Price>
        <S.Date>날짜</S.Date>
      </S.TableRow>
      {props.data?.fetchUseditemsISold.map((el, index) => (
        <S.WrapProduct key={el._id}>
          <S.Index>{index + 1}</S.Index>
          <S.NameMove id={el._id} onClick={props.onClickMoveToDetail}>
            {el.name}
          </S.NameMove>

          <S.IsBuyer>{el.soldAt && "판매완료"}</S.IsBuyer>

          <S.Price>{el.price} ₩</S.Price>
          <S.Date>{getDate(el.createdAt)}</S.Date>
        </S.WrapProduct>
      ))}
    </S.Wrapper>
  );
}