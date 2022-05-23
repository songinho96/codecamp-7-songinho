import styled from "@emotion/styled";

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const WrapError = styled.div``;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
  box-sizing: border-box;
  padding-bottom: 200px;
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
`;

export const Writer = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 24px;
  padding: 20px;
`;

export const Password = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 26px;
  padding: 20px;
`;

export const Star = styled.div``;

export const CommentStar = styled.div`
  :hover {
    pointer-events: none;
  }
`;

export const WrapperWriteComment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriteContent = styled.input`
  width: 1200px;
  height: 108px;
  padding: 20px;
`;

export const WriteFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WriteNum = styled.div`
  width: 1108px;
  height: 52px;
  padding: 20px;
  border: 1px solid black;
`;

export const CommentButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: ${(props) => (props.isActive ? "yellow" : "default")};
`;

export const Wrapperwrited = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  padding-right: 16px;
`;

export const WrapWriteComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapWritedHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export const WrapBackHeader = styled.div``;

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
  font-size: 16px;
  padding-bottom: 20px;
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

export const Underline = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  padding-top: 20px;
`;

export const WrapperComment = styled.div`
  display: flex;
`;
