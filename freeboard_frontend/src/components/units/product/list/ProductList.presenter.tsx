import React from "react";
import * as S from "./ProductList.styles";
export default function ProductListPresenter() {
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
        <S.WrapperProductList>
          <S.WrapProductRow>
            <S.WrapProductList>
              <S.ProductImage src="/product/Promo.png" />
              <S.ProductName>핸드폰</S.ProductName>
              <S.ProductPrice>3000원</S.ProductPrice>
            </S.WrapProductList>
            <S.WrapProductList>
              <S.ProductImage src="/product/Promo.png" />
              <S.ProductName>핸드폰</S.ProductName>
              <S.ProductPrice>3000원</S.ProductPrice>
            </S.WrapProductList>
            <S.WrapProductList>
              <S.ProductImage src="/product/Promo.png" />
              <S.ProductName>핸드폰</S.ProductName>
              <S.ProductPrice>3000원</S.ProductPrice>
            </S.WrapProductList>
          </S.WrapProductRow>
          <S.WrapProductRow>
            <S.WrapProductList>
              <S.ProductImage src="/product/Promo.png" />
              <S.ProductName>핸드폰</S.ProductName>
              <S.ProductPrice>3000원</S.ProductPrice>
            </S.WrapProductList>
            <S.WrapProductList>
              <S.ProductImage src="/product/Promo.png" />
              <S.ProductName>핸드폰</S.ProductName>
              <S.ProductPrice>3000원</S.ProductPrice>
            </S.WrapProductList>
            <S.WrapProductList>
              <S.ProductImage src="/product/Promo.png" />
              <S.ProductName>핸드폰</S.ProductName>
              <S.ProductPrice>3000원</S.ProductPrice>
            </S.WrapProductList>
          </S.WrapProductRow>
        </S.WrapperProductList>
        <S.WrapperProductMini>
          <S.Image src="/product/Item.png" />
          <S.Image src="/product/Item.png" />
          <S.Image src="/product/Item.png" />
          <S.Image src="/product/Item.png" />
        </S.WrapperProductMini>
        <S.WrapButton>
          <S.SubmitButton>글 등록 </S.SubmitButton>
        </S.WrapButton>
      </S.Body>
    </S.Wrapper>
  );
}
