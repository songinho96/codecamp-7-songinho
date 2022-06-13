import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #303030;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Header = styled.div``;

export const MainImage = styled.div`
  background-image: url("/product/Banner.svg");
  height: 1700px;
  background-position: center;
  object-fit: scale-down;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  background-color: #424242;
`;

export const WrapperBest = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BestExplanation = styled.div``;

export const Detail = styled.div`
  font-size: 50px;
`;

export const WrapperBestProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapperBest1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ProductDetail = styled.div`
  width: 50%;
  height: 1000px;
  border: 2px solid black;
  font-size: 200px;
`;

export const WrapBestProduct = styled.div`
  width: 50%;
  height: 1000px;
  border: 2px solid black;
  font-size: 200px;
`;

export const WrapperProductList = styled.div`
  height: 855px;
  width: 530px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WrapProductRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapProductList = styled.div`
  border: 1px solid black;
  margin: 50px 0;
`;

export const ProductImage = styled.img`
  height: 500px;
  width: 100%;
`;

export const ProductName = styled.div`
  font-size: 30px;
`;

export const ProductPrice = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const WrapperProductMini = styled.div`
  margin-top: 700px;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 251px;
  height: 315px;
`;

export const WrapButton = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  color: gray;
  width: 100%;
  height: 80px;
  color: red;
  font-weight: bold;
  font-size: 40px;
`;
