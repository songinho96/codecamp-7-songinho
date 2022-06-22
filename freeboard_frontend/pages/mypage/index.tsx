import styled from "@emotion/styled";
import React from "react";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MypageSidebar from "../../src/components/commons/mypage";
import MypageContainer from "../../src/components/units/mypage/charge";

const Wrapper = styled.div`
  display: flex;
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