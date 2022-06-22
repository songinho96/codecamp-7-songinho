import { Image } from "antd";
import DOMPurify from "dompurify";
import React from "react";
import KakaoMapPageRouted from "../../../commons/maps/kakaorouted";
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
              <S.BasketButton
                onClick={props.onClickBasket}
                isBaskets={props.isBaskets}
              >
                {props.isBaskets ? "장바구니삭제" : "장바구니담기"}
              </S.BasketButton>
              <S.BuyButton onClick={props.onClickDelete}>
                삭제하기Button
              </S.BuyButton>
              <S.ListButton>ListButton</S.ListButton>
              <S.BuyButton onClick={props.onClickBuy}>BuyButton</S.BuyButton>
              <S.PickButton onClick={props.onClickPick} myPick={props.myPick}>
                찜하기
              </S.PickButton>
            </S.WrapProductButton>
          </S.WrapProductDetail>
        </S.WrapperProduct>
        {props.data?.fetchUseditem.useditemAddress?.lat && (
          <S.WrapMap>
            <S.Address>
              주소: {props.data?.fetchUseditem.useditemAddress?.address}
            </S.Address>
            <S.Address>
              상세주소:{" "}
              {props.data?.fetchUseditem.useditemAddress?.addressDetail}
            </S.Address>

            <KakaoMapPageRouted
              lat={props.data?.fetchUseditem.useditemAddress?.lat}
              lng={props.data?.fetchUseditem.useditemAddress?.lng}
            />
          </S.WrapMap>
        )}
      </S.Body>
    </S.Wrapper>
  );
}
