import styled from "@emotion/styled";
import React from "react";
import MypageSidebar from "../../../src/components/commons/mypage";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;
export default function MyProductsPage() {
  return (
    <Wrapper>
      <MypageSidebar />
      {/* <MyProductContainer /> */}
    </Wrapper>
  );
}
