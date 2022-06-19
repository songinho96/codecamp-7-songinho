import { Image } from "antd";
import DOMPurify from "dompurify";
import React from "react";
import * as S from "./ProductDetail.styles";
export default function ProductDetailPresenter(props) {
  return (
    <S.Wrapper>
      <S.Body>
        <S.WrapperProduct>
          <S.WrapperProductImage>
            <S.ProductImage>
              {props.data?.fetchUseditem.images
                ?.filter((el) => el)
                .map((el) => (
                  <S.DetailImage key={el}>
                    <Image src={`https://storage.googleapis.com/${el}`} />
                  </S.DetailImage>
                ))}
            </S.ProductImage>
          </S.WrapperProductImage>
          <S.WrapProductDetail>
            <S.ProductName>FLORAL PLIMSOLL</S.ProductName>
            <S.ProductPrice>{props.data?.fetchUseditem.price}</S.ProductPrice>
            <S.ProductContents>
              {typeof window !== "undefined" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      props.data?.fetchUseditem.contents
                    ),
                  }}
                ></div>
              ) : (
                ""
              )}
            </S.ProductContents>
            <S.ProductTag>ProductTag</S.ProductTag>
            <S.WrapProductButton>
              <S.BuyButton onClick={props.onClickEdit}>
                수정하기Button
              </S.BuyButton>
              <S.BuyButton onClick={props.onClickBasket}>
                {props.isBaskets ? "장바구니삭제버튼" : "장바구니담기버튼"}
              </S.BuyButton>
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
