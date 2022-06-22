import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  height: 100%;
  border-bottom: 2px solid gray;
  margin: auto 0;
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
  width: 10%;
  padding-left: 30px;
  text-align: center;
`;

export const Name = styled.div`
  width: 30%;
  text-align: center;
`;

export const NameMove = styled.div`
  width: 30%;
  cursor: pointer;
  :hover {
    color: red;
  }
  text-align: center;
`;

export const IsBuyer = styled.div`
  width: 10%;
  color: red;
`;

export const Seller = styled.div`
  width: 20%;
  text-align: center;
`;

export const Price = styled.div`
  width: 10%;
`;

export const Date = styled.div`
  width: 20%;
  text-align: center;
`;
