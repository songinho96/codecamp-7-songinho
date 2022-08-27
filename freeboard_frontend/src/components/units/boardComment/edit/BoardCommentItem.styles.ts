import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    width: 100%;
    margin: 10px 0;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 10px 0;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  padding-bottom: 40px;
`;

export const Star = styled.div``;

export const CommentStar = styled.div`
  :hover {
    pointer-events: none;
  }
`;

export const Wrapperwrited = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 20px; */
`;

export const WrapStart = styled.div`
  display: flex;
  width: 90%;
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  padding-right: 16px;
`;

export const WrapWriteComment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapWritedHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapFrontHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentWriter = styled.div`
  padding-right: 18px;
  font-weight: 500;
  font-size: 16px;
`;

export const WrapBackHeader = styled.div`
  width: 15%;
`;

export const Pencil = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
`;

export const Delete = styled.img`
  width: 18px;
  height: 18px;
`;

export const Contents = styled.div`
  width: 100%;
  font-size: 16px;
  padding-bottom: 20px;
  word-break: break-all;
`;

export const Date = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
`;

export const Underline = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  padding-top: 20px;
  border-radius: 0px;
`;

export const WrapperComment = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 20px;
`;
