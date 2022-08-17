import styled from "@emotion/styled";
import React from "react";
import MypageSidebar from "../../../src/components/commons/mypage";
import MyPointContainer from "../../../src/components/units/mypage/myPoint/MyPoint.container";

const Wrapper = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;
`;
export default function MyProductsPage() {
  return (
    <Wrapper>
      <MypageSidebar />
      <MyPointContainer />
    </Wrapper>
  );
}
