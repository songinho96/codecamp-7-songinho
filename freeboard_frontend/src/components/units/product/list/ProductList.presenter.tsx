import React from "react";
import * as S from "./ProductList.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDateToday } from "../../../commons/libraries/utils";

export default function ProductListPresenter(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.MainImage></S.MainImage>
      </S.Header>
      <S.Body>
        <S.WrapperBest>
          <S.WrapperBestProduct>
            <S.WrapperBest1>
              <S.ProductDetail>베스트 상품</S.ProductDetail>
              <S.WrapBest>
                {props.BestData?.fetchUseditemsOfTheBest.map(
                  (el: any, index: number) => (
                    <S.WrapProductList
                      key={el._id}
                      id={el._id}
                      onClick={props.onClickList(el)}
                    >
                      {/* <S.Wrap> */}
                      <S.ProductImage
                        src={
                          el.images[0]
                            ? `https://storage.googleapis.com/${el.images[0]}`
                            : "/list/noimage.gif"
                        }
                        id={el._id}
                      />
                      <S.WrapProductDetail>
                        <S.ProductName>{el.name}</S.ProductName>
                        <S.ProductPrice>{el.price}원</S.ProductPrice>
                      </S.WrapProductDetail>
                      {/* </S.Wrap> */}
                    </S.WrapProductList>
                  )
                )}
              </S.WrapBest>
            </S.WrapperBest1>
          </S.WrapperBestProduct>
        </S.WrapperBest>
        <S.WrapButton>
          <S.SubmitButton onClick={props.onClickMoveWrite}>
            글 등록
          </S.SubmitButton>
        </S.WrapButton>
        <S.WrapSearchBar>
          상품명 입력: <input type="text" onChange={props.onChangeSearch} />
        </S.WrapSearchBar>
        <S.WrapperProductList>
          <S.WrapProductRow>
            <S.Scroll>
              <S.InfiniteScrolls
                pageStart={0}
                loadMore={props.loadFunc}
                hasMore={true}
                useWindow={true}
              >
                {props.data?.fetchUseditems.map((el: any, index: number) => (
                  <S.WrapProductList
                    key={el._id}
                    id={el._id}
                    onClick={props.onClickList(el)}
                  >
                    {/* <S.Wrap> */}
                    <S.ProductImage
                      src={
                        el.images[0]
                          ? `https://storage.googleapis.com/${el.images[0]}`
                          : "/list/noimage.gif"
                      }
                      id={el._id}
                    />
                    <S.WrapProductDetail>
                      <S.ProductName>{el.name}</S.ProductName>
                      <S.WrapDate>
                        <S.ProductPrice>{el.price}원</S.ProductPrice>
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
      <S.PlusCircle onClick={props.onClickMoveWrite} />
    </S.Wrapper>
  );
}
