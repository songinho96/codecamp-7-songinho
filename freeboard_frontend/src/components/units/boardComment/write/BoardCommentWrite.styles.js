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
  /* background-color: white; */
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
  box-shadow: 0px 8px 16px;
`;

export const Password = styled.input`
  width: 180px;
  height: 52px;
  margin-right: 26px;
  padding: 20px;
  box-shadow: 0px 8px 16px;
`;

export const Star = styled.div``;

export const WrapperWriteComment = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 16px;
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

export const Contents = styled.div`
  font-size: 16px;
`;

export const EditBackButton = styled.button`
  width: 91px;
  height: 52px;
`;
