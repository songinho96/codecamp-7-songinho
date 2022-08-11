import styled from "@emotion/styled";
import React from "react";
import MypageSidebar from "../../../../src/components/commons/mypage";
import MyProductContainer from "../../../../src/components/units/mypage/myMarket/myProduct/MyProduct.container";

const Wrapper = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;
`;
export default function MyProductsPage() {
  return (
    <Wrapper>
      <MypageSidebar />
      <MyProductContainer />
    </Wrapper>
  );
}
