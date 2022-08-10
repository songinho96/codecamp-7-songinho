import styled from "@emotion/styled";

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const WrapError = styled.div``;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Body = styled.div`
  margin: 0 auto;
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0 20px 0;
`;

// export const TitlePicture = styled.img`
//   width: 20px;
//   height: 20px;
// `;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  width: 100%;
`;

export const WrapperWriteComment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriteContent = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 10px;
  resize: none;
`;

export const WriteFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const WriteNum = styled.div`
  width: 90%;
  height: 52px;
  padding: 20px;
  border: 1px solid black;
`;

export const CommentButton = styled.button`
  height: 52px;
  width: 100px;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  background-color: #ffa425;
  margin-left: 10px;
`;

export const Contents = styled.div`
  font-size: 16px;
`;

export const EditBackButton = styled.button`
  width: 10%;
  height: 52px;
`;
