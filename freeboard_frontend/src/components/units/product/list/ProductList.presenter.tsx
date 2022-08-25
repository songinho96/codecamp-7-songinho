import React from "react";
import * as S from "./ProductList.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDateToday } from "../../../commons/libraries/utils";
import Banner from "../../../commons/layout/banner";
import TopButton from "../../../commons/topButton";
import { Iel, IProductListPresenterProps } from "./ProductList.types";

export default function ProductListPresenter(
  props: IProductListPresenterProps
) {
  return (
    <S.Wrapper>
      <Banner />
      <S.Body>
        <S.WrapHeader>
          <S.WrapSoldout>
            <S.IsSell isSold={props.isSold} onClick={props.onClickSell}>
              판매중 상품
            </S.IsSell>
            <S.IsSold isSold={props.isSold} onClick={props.onClickSold}>
              판매된 상품
            </S.IsSold>
          </S.WrapSoldout>
          <S.WrapSearchBar>
            상품명 입력:{" "}
            <S.SearchInput type="text" onChange={props.onChangeSearch} />
          </S.WrapSearchBar>
        </S.WrapHeader>
        <S.WrapperProductList>
          <S.WrapProductRow>
            <S.Scroll>
              <S.InfiniteScrolls
                pageStart={0}
                loadMore={props.loadFunc}
                hasMore={true}
                useWindow={true}
              >
                {props.data?.fetchUseditems.map((el: Iel, index: number) => (
                  <S.WrapProductList
                    key={el._id}
                    id={el._id}
                    onClick={props.onClickList(el)}
                  >
                    {/* <S.Wrap> */}

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
                      <S.WrapNameHeart>
                        <S.ProductName>{el.name}</S.ProductName>
                        <S.Heart>
                          <S.HeartIcon src="/product/Heart.png" />
                          <S.HeartCount>{el.pickedCount}</S.HeartCount>
                        </S.Heart>
                      </S.WrapNameHeart>
                      <S.WrapDate>
                        <S.ProductPrice>
                          {el.price.toLocaleString("ko-KR")}원
                        </S.ProductPrice>
                        <S.ProductDate>
                          {getDateToday(el.createdAt)}
                        </S.ProductDate>
                      </S.WrapDate>
                    </S.WrapProductDetail>
                    {/* </S.Wrap> */}
                  </S.WrapProductList>
                ))}
              </S.InfiniteScrolls>
            </S.Scroll>
          </S.WrapProductRow>
        </S.WrapperProductList>
      </S.Body>
      {/* <TodayProductPage /> */}
      <TopButton />
    </S.Wrapper>
  );
}
