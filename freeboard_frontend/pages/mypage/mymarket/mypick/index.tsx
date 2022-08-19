import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../../../../src/commons/styles/media";
import MypageSidebar from "../../../../src/components/commons/mypage";
import MyPickContainer from "../../../../src/components/units/mypage/myMarket/myPick/MyPick.container";

const Wrapper = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;
export default function MyPickPage() {
  return (
    <Wrapper>
      <MypageSidebar />
      <MyPickContainer />
    </Wrapper>
  );
}
