import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Image, Tag } from "antd";
import DOMPurify from "dompurify";
import React from "react";
import KakaoMapPageRouted from "../../../commons/maps/kakaorouted";
import * as S from "./ProductDetail.styles";
export default function ProductDetailPresenter(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Image
          src={
            props.data?.fetchUseditem?.images[0]
              ? `https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`
              : "/list/noImage.gif"
          }
        />
        <S.WrapDetail>
          <S.WrapTitle>
            <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
            <S.WrapIcon>
              <S.EditIcon
                onClick={props.onClickEdit}
                src="/images/pencil.png"
              />
              <S.EditIcon onClick={props.onClickDelete} src="/images/x.png" />
            </S.WrapIcon>
          </S.WrapTitle>
          <S.Price>{props.data?.fetchUseditem.price}</S.Price>
          <S.Underline></S.Underline>
          <S.Contents>{props.data?.fetchUseditem.remarks}</S.Contents>
          <S.WrapTags>
            <S.Tags>
              {/* {props.data?.fetchUseditem.tags} */}
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
            <S.BuyButton onClick={props.onClickBuy}>바로구매</S.BuyButton>
          </S.WrapButton>
        </S.WrapDetail>
      </S.Header>

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

      {props.data?.fetchUseditem.useditemAddress?.lat && (
        <S.WrapMap>
          <KakaoMapPageRouted
            lat={props.data?.fetchUseditem.useditemAddress?.lat}
            lng={props.data?.fetchUseditem.useditemAddress?.lng}
          />
          <S.WrapAddress>
            <S.Address>
              <img style={{ marginRight: 30 }} src="/images/Location.png" />
              {props.data?.fetchUseditem.useditemAddress?.address}
            </S.Address>
            <S.Address>
              {props.data?.fetchUseditem.useditemAddress?.addressDetail}
            </S.Address>
          </S.WrapAddress>
        </S.WrapMap>
      )} */}
    </S.Wrapper>
  );
}
