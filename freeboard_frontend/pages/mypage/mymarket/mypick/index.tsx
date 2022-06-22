import styled from "@emotion/styled";
import React from "react";
import MypageSidebar from "../../../../src/components/commons/mypage";
import MyPickContainer from "../../../../src/components/units/mypage/myMarket/myPick/MyPick.container";

const Wrapper = styled.div`
  display: flex;
  margin: 0;
`;
export default function MyPickPage() {
  return (
    <Wrapper>
      <MypageSidebar />
      <MyPickContainer />
    </Wrapper>
  );
}
