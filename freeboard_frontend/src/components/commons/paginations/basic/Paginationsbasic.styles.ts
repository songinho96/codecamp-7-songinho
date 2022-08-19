import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
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

  @media ${breakPoints.mobile} {
    padding-left: 5px;
  }
`;

export const Pagination = styled.div`
  margin-left: 15px;
  text-align: center;
  width: 40px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#blue" : "none")};
  font-weight: ${(props) => (props.isActive ? "700" : "none")};

  @media ${breakPoints.mobile} {
    width: 5px;
    margin-left: 10px;
  }
`;

export const NextButton = styled.div`
  padding-left: 15px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 5px;
    margin-left: 10px;
  }
`;

export const StartButton = styled.div`
  padding-left: 15px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    padding-left: 5px;
  }
`;

export const LastButton = styled.div`
  padding-left: 15px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    padding-left: 5px;
  }
`;
