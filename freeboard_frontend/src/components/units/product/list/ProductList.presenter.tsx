import React, { Fragment } from "react";
import * as S from "./ProductList.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBasketContainer from "../basket/ProductBasket.container";

export default function ProductListPresenter(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.MainImage></S.MainImage>
      </S.Header>
      <S.Body>
        <S.WrapperBest>
          {/* WrapperBest
          <S.BestExplanation>
            BestExplanation
            <S.Detail>쏼라쏼라</S.Detail>
          </S.BestExplanation> */}
          <S.WrapperBestProduct>
            <S.WrapperBest1>
              <S.ProductDetail>베스트게시물</S.ProductDetail>
              <S.WrapBestProduct>캐러셀</S.WrapBestProduct>
            </S.WrapperBest1>
            <S.WrapperBest1>
              <S.ProductDetail>베스트게시물</S.ProductDetail>
              <S.WrapBestProduct>캐러셀</S.WrapBestProduct>
            </S.WrapperBest1>
          </S.WrapperBestProduct>
        </S.WrapperBest>
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
                useWindow={false}
              >
                {props.data?.fetchUseditems.map((el: any, index: number) => (
                  <S.WrapProductList
                    key={el._id}
                    id={el._id}
                    onClick={props.onClickList}
                  >
                    <S.ProductImage
                      src={
                        el.images[0]
                          ? `https://storage.googleapis.com/${el.images[0]}`
                          : "/list/noimage.gif"
                      }
                    />
                    <S.WrapProductDetail>
                      <S.ProductName>{el.name}</S.ProductName>
                      <S.ProductPrice>{el.price}원</S.ProductPrice>
                    </S.WrapProductDetail>
                  </S.WrapProductList>
                ))}
              </S.InfiniteScrolls>
            </S.Scroll>
          </S.WrapProductRow>
        </S.WrapperProductList>
      </S.Body>
      <S.WrapperProductMini>
        <div>
          <S.StyledSlider {...props.settings}>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
            <div>
              <S.Image src="/product/Item.png" />
            </div>
          </S.StyledSlider>
        </div>
      </S.WrapperProductMini>
      <S.WrapButton>
        <S.SubmitButton onClick={props.onClickMoveWrite}>
          글 등록
        </S.SubmitButton>
      </S.WrapButton>
    </S.Wrapper>
  );
}
