import React from "react";
import * as S from "./ProductDetail.styles";
export default function ProductDetailPresenter() {
  return (
    <S.Wrapper>
      <S.Body>
        <S.WrapperProduct>
          <S.ProductImage src="/product/detail1.png" />
          <S.WrapProductDetail>
            <S.ProductName>FLORAL PLIMSOLL</S.ProductName>
            <S.ProductPrice>$ 780.00</S.ProductPrice>
            <S.ProductContents>
              Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
              pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
              malesuada ultricies.
            </S.ProductContents>
            <S.ProductTag>ProductTag</S.ProductTag>
            <S.WrapProductButton>
              <S.ListButton>ListButton</S.ListButton>
              <S.BuyButton>BuyButton</S.BuyButton>
            </S.WrapProductButton>
          </S.WrapProductDetail>
        </S.WrapperProduct>
        <S.WrapMap>
          <S.Map>Map</S.Map>
        </S.WrapMap>
      </S.Body>
    </S.Wrapper>
  );
}
