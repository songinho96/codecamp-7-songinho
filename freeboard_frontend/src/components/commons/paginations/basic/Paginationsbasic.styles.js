import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 700px;
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
  border: 1px solid #ddd;
  text-align: center;
  width: 40px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#ddd" : "none")};
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
