import { EnvironmentFilled } from "@ant-design/icons";
import React from "react";
import { getDateToday } from "../../../../commons/libraries/utils";
import PaginationPick from "../../../../commons/paginations/pick/Paginationsbasic.container";
import SearchbarMymarketPickPresenter from "../../../../commons/searchbars/myMarket/pick/SearchbarMymarket.container";

import * as S from "./MyPick.styles";
import { Iel, IMyPickPresenterProps } from "./MyPick.types";

export default function MyProductPresenter(props: IMyPickPresenterProps) {
  return (
    <S.Wrapper>
      <SearchbarMymarketPickPresenter />
      <S.WrapHeader>
        <S.Count>전체: {props.pickCount?.fetchUseditemsCountIPicked} </S.Count>
        <S.WrapperSearch>
          <S.Searchbar
            placeholder="상품명을 검색해주세요"
            onChange={props.onChangeSearch}
          />
          <S.SearchIcon src="/myPage/search.png" />
        </S.WrapperSearch>
      </S.WrapHeader>
      <S.WrapperList>
        {props.data?.fetchUseditemsIPicked.map((el: Iel) => (
          <S.WrapProductList
            onClick={props.onClickMoveToDetail}
            key={el._id}
            id={el._id}
          >
            <S.WrapProductImage>
              {el.soldAt && <S.ProductSold>판매완료</S.ProductSold>}
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
      <PaginationPick pickCount={props.pickCount} refetch={props.refetch} />
    </S.Wrapper>
  );
}
