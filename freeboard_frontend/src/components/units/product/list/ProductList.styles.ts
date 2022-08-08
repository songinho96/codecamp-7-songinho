import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Header = styled.div``;

export const MainImage = styled.div`
  /* background-image: url("/product/Banner.svg"); */
  /* height: 1700px; */
  /* background-position: center; */
  /* object-fit: scale-down; */
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  margin: 0 auto;
  /* background-color: #424242; */
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
  flex-direction: column;
  width: 100%;
`;

export const ProductDetail = styled.div`
  padding-top: 30px;
  text-align: center;
  font-size: 200px;
`;

export const WrapBest = styled.div`
  display: flex;
`;

export const WrapBestProduct = styled.div`
  width: 50%;
  height: 1000px;
  border: 2px solid black;
  font-size: 200px;
`;

export const WrapSearchBar = styled.div`
  margin-top: 50px;
  position: sticky;
  top: 30px;
`;

export const WrapperProductList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

export const WrapProductRow = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Scroll = styled.div``;

export const InfiniteScrolls = styled(InfiniteScroll)`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const WrapProductList = styled.div`
  /* height: 855px; */
  width: 196px;
  height: 276px;
  cursor: pointer;
  margin: 0 11px 11px 0;
`;

export const Wrap = styled.div``;

export const ProductImage = styled.img`
  width: 194px;
  height: 194px;
  border: 1px solid #d1d1d6;
`;

export const WrapProductDetail = styled.div`
  width: 194px;
  height: 80px;
  border: 1px solid #d1d1d6;
  border-top: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-size: 16px;
`;

export const WrapDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-weight: 100;
  font-size: 0.9rem;
`;

export const ProductDate = styled.div`
  font-size: 0.7rem;
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

export const Submit = styled.div`
  width: 50px;
  height: 50px;
`;

export const PlusCircle = styled(PlusCircleOutlined)`
  position: fixed;
  font-size: 100px;
  bottom: 100px;
  right: 150px;
`;
