import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import Slider from "react-slick";

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
  width: 1200px;
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

export const Scroll = styled.div`
  height: 2000px;
  overflow: auto;
`;

export const InfiniteScrolls = styled(InfiniteScroll)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const WrapProductList = styled.div`
  /* height: 855px; */
  width: 70%;
  margin: 60px auto;
  box-shadow: 5px 10px 10px #c8c8c8;
  border-radius: 20px 30px 0 0;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  /* height: 70%; */
  width: 100%;
  height: 300px;
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid #d1d1d6;
`;

export const WrapProductDetail = styled.div``;

export const ProductName = styled.div`
  font-size: 16px;
  padding: 10px;
`;

export const ProductPrice = styled.div`
  font-weight: 100;
  padding: 10px;
  font-size: 18px;
`;

export const WrapperProductMini = styled.div`
  /* margin-top: 700px;
  display: flex;
  justify-content: space-between; */
  width: 100%;
  margin: 30px 20px;
  padding: 40px;
  cursor: pointer;
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

export const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -100px;
  }
  .slick-dots li button:before {
    color: blue;
  }
`;
