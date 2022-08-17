import { EnvironmentFilled } from "@ant-design/icons";
import React from "react";
import { getDateToday } from "../../../../commons/libraries/utils";
import PaginationMyProduct from "../../../../commons/paginations/myProduct/Paginationsbasic.container";
import SearchbarMymarketSoldPresenter from "../../../../commons/searchbars/myMarket/SearchbarMymarket.container";

import * as S from "./MyProduct.styles";

export default function MyProductPresenter(props) {
  return (
    <S.Wrapper>
      <SearchbarMymarketSoldPresenter refetch={props.refetch} />
      {/* <S.TableRow>
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
      ))} */}
      <S.WrapHeader>
        <S.Count>전체: {props.soldCount?.fetchUseditemsCountISold} </S.Count>
        <S.WrapperSearch>
          <S.Searchbar
            placeholder="상품명을 검색해주세요"
            onChange={props.onChangeSearch}
          />
          <S.SearchIcon src="/myPage/search.png" />
        </S.WrapperSearch>
      </S.WrapHeader>
      <S.WrapperList>
        {props.data?.fetchUseditemsISold.map((el) => (
          <S.WrapProductList
            onClick={props.onClickMoveToDetail}
            key={el._id}
            id={el._id}
          >
            <S.WrapProductImage>
              {el.soldAt && <S.ProductSold>판매 완료</S.ProductSold>}

              <S.ProductImage
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/list/noimage.gif"
                }
                id={el._id}
                soldAt={el.soldAt}
              />
            </S.WrapProductImage>
            <S.WrapProductDetail>
              <S.ProductName>{el.name}</S.ProductName>
              <S.WrapDate>
                <S.ProductPrice>
                  {el.price.toLocaleString("ko-KR")}원
                </S.ProductPrice>
                <S.ProductDate>{getDateToday(el.createdAt)}</S.ProductDate>
              </S.WrapDate>
            </S.WrapProductDetail>
            <S.WrapAddress>
              <EnvironmentFilled style={{ color: "#a8a8a8" }} />
              {el.useditemAddress?.address ? (
                <S.ProductAddress>
                  {el.useditemAddress?.address}
                </S.ProductAddress>
              ) : (
                <S.ProductAddress>전국</S.ProductAddress>
              )}
            </S.WrapAddress>
          </S.WrapProductList>
        ))}
      </S.WrapperList>
      <PaginationMyProduct
        refetch={props.refetch}
        soldCount={props.soldCount}
      />
    </S.Wrapper>
  );
}
