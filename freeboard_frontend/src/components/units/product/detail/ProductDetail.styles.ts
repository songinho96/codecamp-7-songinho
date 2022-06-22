import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
`;

export const Body = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const WrapperProduct = styled.div`
  display: flex;
  flex-direction: row;
  padding: 200px 0;
`;

export const WrapperProductImage = styled.div`
  width: 760px;
  height: 680px;
`;

export const ProductImage = styled.div`
  width: 400px;
  border: 1px solid black;
  margin-right: 100px;
`;

export const DetailImage = styled.div`
  border: 1px solid gray;
  margin: 0 30px;
`;

export const WrapProductDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const ProductPrice = styled.div`
  font-size: 25px;
`;

export const ProductContents = styled.div`
  width: 996px;
  height: 184px;
  font-size: 17px;
`;

export const ProductTag = styled.div`
  padding-bottom: 200px;
`;

export const WrapProductButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ListButton = styled.button`
  width: 180px;
  height: 50px;
  margin: 0 50px;
`;

export const BuyButton = styled.button`
  width: 180px;
  height: 50px;
`;

export const BasketButton = styled.button`
  width: 180px;
  height: 50px;
  background-color: ${(props) => (props.isBaskets ? "yellow" : "gray")};
  color: ${(props) => (props.isBaskets ? "black" : "white")};
`;

export const PickButton = styled.button`
  width: 180px;
  height: 50px;
  background-color: ${(props) => (props.myPick === 1 ? "yellow" : "gray")};
  color: ${(props) => (props.myPick === 1 ? "black" : "white")};
`;

export const WrapMap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Address = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 800px;
  height: 50px;

  margin: 20px 0;
`;

export const Map = styled.div`
  width: 792px;
  height: 360px;
  background-color: gray;
`;
