import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../../src/commons/styles/media";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MypageSidebar from "../../src/components/commons/mypage";
import MypageContainer from "../../src/components/units/mypage/charge";

const Wrapper = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export default function MyPage() {
  useAuth();
  return (
    <Wrapper>
      <MypageSidebar />
      <MypageContainer />;
    </Wrapper>
  );
}
