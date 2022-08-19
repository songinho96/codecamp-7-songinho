import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 700px;
  font-size: 16px;
  padding: 50px 0;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PrevButton = styled.div`
  cursor: pointer;
  padding-left: 15px;
`;

export const Pagination = styled.div`
  margin-left: 15px;
  text-align: center;
  width: 40px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#blue" : "none")};
  font-weight: ${(props) => (props.isActive ? "700" : "none")}; ;
`;

export const NextButton = styled.div`
  padding-left: 15px;
  cursor: pointer;
`;

export const StartButton = styled.div`
  padding-left: 15px;
  cursor: pointer;
`;

export const LastButton = styled.div`
  padding-left: 15px;
  cursor: pointer;
`;
