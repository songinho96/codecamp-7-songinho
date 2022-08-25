import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { ICommentButtonProps } from "./BoardCommentWrite.types";

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const WrapWriterPassword = styled.div`
  display: flex;

  @media ${breakPoints.mobile} {
  }
`;

export const WrapError = styled.div``;

export const Wrapper = styled.div`
  width: 1024px;
  margin: 100px auto;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 30px 0;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  padding-bottom: 40px;
`;

export const TitlePicture = styled.img`
  width: 20px;
  height: 20px;
`;

export const Title = styled.div`
  padding-left: 14px;
`;

export const WrapCommentWrite = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;

  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
  }
`;

export const Writer = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding: 20px;

  @media ${breakPoints.mobile} {
    width: 170px;
  }
`;

export const Password = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 26px;
  padding: 20px;

  @media ${breakPoints.mobile} {
    width: 170px;
    margin-right: 0;
  }
`;

export const Star = styled.div`
  @media ${breakPoints.mobile} {
    padding-bottom: 20px;
  }
`;

export const WrapperWriteComment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriteContent = styled.textarea`
  /* width: 1200px; */
  height: 108px;
  padding: 20px;
  resize: none;
`;

export const WriteFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WriteNum = styled.div`
  width: 90%;
  height: 52px;
  padding: 20px;
  border: 1px solid black;
`;

export const CommentButton = styled.button`
  width: 10%;
  height: 52px;
  background-color: ${(props: ICommentButtonProps) =>
    props.isActive ? "yellow" : "default"};
`;

export const Contents = styled.div`
  font-size: 16px;
`;

export const EditBackButton = styled.button`
  width: 10%;
  height: 52px;
`;
