import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const PrevButton = styled.div`
  cursor: pointer;
  padding-left: 15px;
`;

export const Pagination = styled.div`
  margin-left: 15px;
  text-align: center;
  width: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#FED602" : "none")};
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
