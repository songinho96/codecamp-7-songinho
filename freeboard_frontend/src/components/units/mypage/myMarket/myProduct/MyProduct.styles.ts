import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  height: 100%;
  border-bottom: 2px solid gray;
`;

export const TableRow = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  padding: 10px 0;

  border-top: 2px solid gray;
`;

export const WrapProduct = styled.div`
  display: flex;
  border-top: 1px solid gray;
  padding-top: 10px;
`;

export const Index = styled.div`
  width: 20%;
  padding-left: 30px;
`;

export const Name = styled.div`
  width: 40%;
`;

export const NameMove = styled.div`
  width: 40%;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

export const Price = styled.div`
  width: 30%;
`;

export const Date = styled.div`
  width: 20%;
`;
