import styled from "@emotion/styled";

import React from "react";

import RubberBand from "react-reveal/RubberBand";

const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px auto;
  /* padding: 80px 102px 100px 102px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 16px 48px;
  box-sizing: border-box;
  background-color: white;
`;

const RubberMain = styled(RubberBand)``;

const Title = styled.div`
  font-size: 200px;
`;

export default function Main() {
  return (
    <Wrapper>
      <RubberMain>
        <Title>PORT FOLIO</Title>
      </RubberMain>
    </Wrapper>
  );
}
