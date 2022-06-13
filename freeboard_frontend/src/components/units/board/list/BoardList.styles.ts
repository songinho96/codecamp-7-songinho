import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  border: 1px solid black;
  margin: 100px auto;
  padding: 0px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-sizing: border-box;
  background-color: white;
  font-size: 20px;
  background: no-repeat center; // no-repert: 이미지 반복x  center: 가운데배치
  /* background-image: url("/list/blackground.jpeg"); */
  background-size: cover;
  object-fit: fill;
`;

// body
export const Body = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;

export const WrapperSearch = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 40px;
`;

export const InputSearch = styled.input`
  margin-right: 42px;
  width: 776px;
  height: 52px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

export const DateSearch = styled.input`
  margin-right: 44px;
  width: 244px;
  height: 52px;
  color: #bdbdbd;
  text-align: center;
`;

export const ButtonSearch = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;
`;

export const Underline = styled.div`
  border-bottom: 3px solid gray;
`;

export const WrapperTable = styled.div`
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

export const Row = styled.div`
  display: flex;
  padding: 10px 0;
  border-top: 1px solid gray;
`;

export const TitleColumntitle = styled.div`
  width: 60%;
  text-align: center;
`;

export const NumColumn = styled.div`
  width: 10%;
  text-align: center;
`;

export const TitleColumn = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const WriterColumn = styled.div`
  width: 20%;
  text-align: center;
`;

export const DateColumn = styled.div`
  width: 20%;
  text-align: center;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  margin-left: 150px;
`;

export const Word = styled.span`
  color: ${(props: any) => (props.isMatched ? "gray" : "black")};
`;
