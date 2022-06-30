import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  /* width: 80%;
  margin: 0 auto; */
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

export const Label = styled.div`
  padding-top: 50px;
  font-weight: 900;
  font-size: 50px;
`;

export const WrapperProductMini = styled.div`
  /* display: flex;
  justify-content: space-between;
  width: 100%; */
  /* margin: 0 20px; */
  /* padding: 40px; */
  /* cursor: pointer; */
`;

export const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -100px;
  }
  .slick-dots li button:before {
    color: blue;
  }
`;

export const WrapProductList = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto;
  border-radius: 20px 30px 0 0;
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 257px;
  border: 1px solid gray;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid #d1d1d6;
  cursor: pointer;
`;

export const WrapProductDetail = styled.div``;

export const ProductName = styled.div`
  font-size: 16px;
`;

export const ProductPrice = styled.div`
  font-weight: 100;
  font-size: 18px;
`;
