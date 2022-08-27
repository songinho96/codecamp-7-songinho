import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IWord } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 1024px;
  border: 1px solid black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-sizing: border-box;
  background-color: white;
  font-size: 1rem;
  background: no-repeat center; // no-repert: 이미지 반복x  center: 가운데배치
  background-size: cover;
  object-fit: fill;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

// body
export const Body = styled.div`
  width: 100%;
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
  border-bottom: 2px solid gray;
`;

export const WrapperTable = styled.div`
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  margin: 5px 0;
`;

export const Row = styled.div`
  display: flex;
  padding: 13px 0;
  border-top: 1px solid gray;
`;

export const TitleColumntitle = styled.div`
  width: 60%;
  text-align: center;
  font-weight: 700;
`;

export const NumColumn = styled.div`
  width: 10%;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const TitleColumn = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  :hover {
    color: red;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const WriterColumn = styled.div`
  width: 20%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const DateColumn = styled.div`
  width: 20%;
  text-align: center;

  @media ${breakPoints.mobile} {
    width: 40%;
    font-size: 0.8rem;
  }
`;

export const DateColumnTitle = styled.div`
  width: 20%;
  text-align: center;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    width: 40%;
  }
`;

export const NumColumnTitle = styled.div`
  width: 10%;
  text-align: center;
  font-weight: 700;
`;

export const WriterColumnTitle = styled.div`
  width: 20%;
  text-align: center;
  font-weight: 700;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media ${breakPoints.mobile} {
    margin-bottom: 70px;
  }
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  margin-bottom: 30px;

  :hover {
    background-color: #f5f2b1;
  }
`;

export const Word = styled.span`
  color: ${(props: IWord) => (props.isMatched ? "blue" : "black")};
`;
