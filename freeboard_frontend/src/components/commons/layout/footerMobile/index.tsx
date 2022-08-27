import styled from "@emotion/styled";
import React from "react";
import { useMoveToPage } from "../../hooks/useMoveToPage";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0px;
  right: 0px;
  background-color: white;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

const WrapTitle = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #bdbdbd;
  padding: 10px 0;
`;

const FooterImg = styled.img`
  width: 25px;
  height: 25px;
`;

const FooterLabel = styled.div`
  margin-top: 7px;
  color: #bdbdbd;
  font-size: 0.9rem;
`;

export default function FooterMobile() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <Wrapper>
      <WrapTitle onClick={onClickMoveToPage("/products")}>
        <FooterImg src="/images/footerHome.svg" />
        <FooterLabel>홈</FooterLabel>
      </WrapTitle>
      <WrapTitle onClick={onClickMoveToPage("/baskets")}>
        <FooterImg src="/images/footerCart.svg" />
        <FooterLabel>장바구니</FooterLabel>
      </WrapTitle>
      <WrapTitle onClick={onClickMoveToPage("/products/new")}>
        <FooterImg src="/images/footerPlus.svg" />
        <FooterLabel>등록</FooterLabel>
      </WrapTitle>
      <WrapTitle onClick={onClickMoveToPage("/mypage/mymarket/myproducts")}>
        <FooterImg src="/images/footerMy.svg" />
        <FooterLabel>마이</FooterLabel>
      </WrapTitle>
    </Wrapper>
  );
}
