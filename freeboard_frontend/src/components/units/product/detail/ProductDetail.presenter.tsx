import {
  DeleteOutlined,
  EnvironmentOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Image, Tag } from "antd";
import DOMPurify from "dompurify";
import React from "react";
import KakaoMapPageRouted from "../../../commons/maps/kakaorouted";
import ProductImage from "../../../commons/ProductImage";
import * as S from "./ProductDetail.styles";
export default function ProductDetailPresenter(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <ProductImage />
        <S.WrapDetail>
          <S.WrapTitle>
            <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
            <S.WrapIcon>
              <FormOutlined
                style={{ fontSize: 30, marginRight: 20 }}
                onClick={props.onClickEdit}
              />
              <DeleteOutlined
                style={{ fontSize: 30 }}
                onClick={props.onClickDelete}
              />
            </S.WrapIcon>
          </S.WrapTitle>
          <S.Price>{props.data?.fetchUseditem.price} 원</S.Price>
          <S.Underline></S.Underline>
          <S.Contents>{props.data?.fetchUseditem.remarks}</S.Contents>
          <S.WrapTags>
            <S.Tags>
              {props.data?.fetchUseditem.tags
                ?.filter((el) => el)
                .map((el) => (
                  <Tag key={el}>{el}</Tag>
                ))}
            </S.Tags>
          </S.WrapTags>
          <S.WrapButton>
            <S.Pickbutton onClick={props.onClickPick}>
              찜 {props.data?.fetchUseditem.pickedCount}
            </S.Pickbutton>
            <S.BasketButton onClick={props.onClickBasket}>
              {props.isBaskets ? "장바구니 삭제" : "장바구니"}
            </S.BasketButton>
            <S.BuyButton onClick={props.onClickBuy}>구매하기</S.BuyButton>
          </S.WrapButton>
        </S.WrapDetail>
      </S.Header>
      <S.Underline></S.Underline>
      <S.Body>
        <S.ProductContents>
          {typeof window !== "undefined" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></div>
          ) : (
            ""
          )}
        </S.ProductContents>

        {props.data?.fetchUseditem.useditemAddress?.lat && (
          <S.WrapMap>
            <KakaoMapPageRouted
              lat={props.data?.fetchUseditem.useditemAddress?.lat}
              lng={props.data?.fetchUseditem.useditemAddress?.lng}
            />
            <S.WrapAddress>
              <S.Address>
                <EnvironmentOutlined style={{ marginRight: 20 }} />
                {props.data?.fetchUseditem.useditemAddress?.address}
              </S.Address>
              <S.Address>
                {props.data?.fetchUseditem.useditemAddress?.addressDetail}
              </S.Address>
            </S.WrapAddress>
          </S.WrapMap>
        )}
      </S.Body>

      {/* {props.data?.fetchUseditem.images
        ?.filter((el) => el)
        .map((el) => (
          <S.WrapImage key={el}>
            <Image
              style={{ width: 300, backgroundColor: "gray" }}
              src={`https://storage.googleapis.com/${el}`}
            />
          </S.WrapImage>
        ))}

      <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
      <S.ProductPrice>{props.data?.fetchUseditem.price}</S.ProductPrice>
      <S.ProductContents>
        {typeof window !== "undefined" ? (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          ></div>
        ) : (
          ""
        )}
      </S.ProductContents>
      <S.ProductTag>ProductTag</S.ProductTag>

      <S.WrapEditDelete>
        <FormOutlined
          style={{ fontSize: 50, marginRight: 20 }}
          onClick={props.onClickEdit}
        />
        <DeleteOutlined
          style={{ fontSize: 50 }}
          onClick={props.onClickDelete}
        />
      </S.WrapEditDelete>

      <S.BasketButton onClick={props.onClickBasket} isBaskets={props.isBaskets}>
        {props.isBaskets ? "장바구니삭제" : "장바구니담기"}
      </S.BasketButton>

      <S.ListButton>ListButton</S.ListButton>
      <S.BuyButton onClick={props.onClickBuy}>BuyButton</S.BuyButton>
      <S.PickButton onClick={props.onClickPick} myPick={props.myPick}>
        찜하기
      </S.PickButton>
       */}
    </S.Wrapper>
  );
}
