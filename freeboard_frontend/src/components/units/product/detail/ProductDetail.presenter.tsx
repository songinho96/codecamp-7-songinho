import {
  ClockCircleFilled,
  DeleteOutlined,
  EnvironmentOutlined,
  FormOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Tag } from "antd";
import DOMPurify from "dompurify";
import React from "react";
import { getDateToday } from "../../../commons/libraries/utils";
import KakaoMapPageRouted from "../../../commons/maps/kakaorouted";
import ProductImage from "../../../commons/ProductImage";
import ProductQuestionListContainer from "../../productComment/list/ProductQuestionList.container";
import ProductQuestionWriteContainer from "../../productComment/write/ProductQuestionWrite.container";
import * as S from "./ProductDetail.styles";

export default function ProductDetailPresenter(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <ProductImage />
        <S.WrapDetail>
          <S.WrapTitle>
            <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
            {props.seller && (
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
            )}
          </S.WrapTitle>
          <S.Price>
            {props.data?.fetchUseditem.price.toLocaleString("ko-KR")} 원
          </S.Price>
          <S.Underline></S.Underline>
          <S.WrapInfo>
            <S.WrapHeart>
              <HeartFilled style={{ color: "#cccccc", fontSize: "20px" }} />
              <S.Count>{props.data?.fetchUseditem.pickedCount} </S.Count>
            </S.WrapHeart>
            <S.WrapHeart>
              <ClockCircleFilled
                style={{ color: "#cccccc", fontSize: "20px" }}
              />
              <S.Count>
                {" "}
                {getDateToday(props.data?.fetchUseditem.createdAt)}
              </S.Count>
            </S.WrapHeart>
          </S.WrapInfo>
          <S.WrapRemarks>
            <S.Remark>한줄 요약</S.Remark>
            <S.Contents>{props.data?.fetchUseditem.remarks}</S.Contents>
          </S.WrapRemarks>
          <S.WrapTags>
            <S.Remark>상품태그</S.Remark>
            <S.Tags>
              {props.data?.fetchUseditem.tags
                ?.filter((el) => el)
                .map((el) => (
                  <Tag key={el}>{el}</Tag>
                ))}
            </S.Tags>
          </S.WrapTags>
          <S.WrapLocation>
            <S.Remark>거래지역</S.Remark>
            <S.Contents>
              <EnvironmentOutlined style={{ marginRight: 7 }} />
              {props.data?.fetchUseditem.useditemAddress?.address
                ? `${props.data?.fetchUseditem.useditemAddress?.address}`
                : "전국"}
            </S.Contents>
          </S.WrapLocation>
          <S.WrapButton>
            {props.data?.fetchUseditem.soldAt ? (
              <S.Sold>판매 완료된 상품 입니다</S.Sold>
            ) : (
              <>
                {props.seller || (
                  <>
                    <S.Pickbutton onClick={props.onClickPick}>
                      찜 {props.data?.fetchUseditem.pickedCount}
                    </S.Pickbutton>
                    <S.BasketButton onClick={props.onClickBasket}>
                      {props.isBaskets ? "장바구니 취소" : "장바구니"}
                    </S.BasketButton>
                    <S.BuyButton onClick={props.onClickBuy}>
                      구매하기
                    </S.BuyButton>
                  </>
                )}
              </>
            )}
          </S.WrapButton>
        </S.WrapDetail>
      </S.Header>
      <S.Underline></S.Underline>
      <S.Body>
        <S.WrapProduct>
          <S.WrapProductContents>
            <S.Title>상품정보</S.Title>

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
          </S.WrapProductContents>

          {props.data?.fetchUseditem.useditemAddress?.address && (
            <S.WrapMap>
              <S.Title>거래지역</S.Title>
              <KakaoMapPageRouted
                address={props.data?.fetchUseditem.useditemAddress?.address}
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
        </S.WrapProduct>
        <S.DiveideLine></S.DiveideLine>
        <S.WrapComment>
          <S.Title>판매자 정보</S.Title>
          <S.WrapSeller>
            {props.data?.fetchUseditem.seller.picture ? (
              <S.ProfileImage>
                {props.data?.fetchUseditem.seller?.picture}
              </S.ProfileImage>
            ) : (
              <S.Profile src="/commentBoard/profile-Icon.svg" />
            )}

            <S.UserId>{props.data?.fetchUseditem.seller.name}</S.UserId>
          </S.WrapSeller>
          <ProductQuestionWriteContainer />
          <ProductQuestionListContainer />
        </S.WrapComment>
      </S.Body>
    </S.Wrapper>
  );
}
