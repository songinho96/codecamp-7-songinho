import styled from "@emotion/styled";
// import { breakPoints } from "../../../commons/utils/media";

export const Position = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  /* overflow: hidden; */
`;
export const CarouselBox = styled.div`
  width: 100%;
  /* height: 440px; */
  margin-bottom: 100px;
  .slick-dots {
    bottom: 25px;
    li button:before {
      color: #efefef73;
    }
  }
`;
export const ResponsiveBox = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0;
  padding-bottom: 100px;
`;

export const Carousel1 = styled.div`
  width: 100%;
  height: 530px;
  background-image: url(/images/MainCarouselImg1.png);
  background-size: cover;
  font-size: 40px;
  font-weight: 400;
  color: #fffbfbbf;
  position: relative;
`;
export const Carousel2 = styled.div`
  width: 100%;
  height: 530px;
  background-image: url(/images/MainCarouselImg2.png);
  background-size: cover;
  font-size: 40px;
  font-weight: 400;
  color: #fffbfbbf;
  position: relative;
`;
export const Carousel3 = styled.div`
  width: 100%;
  height: 530px;
  background-image: url(/images/MainCarouselImg3.png);
  background-size: cover;
  font-size: 40px;
  font-weight: 400;
  color: #fffbfbbf;
  position: relative;
`;
export const CarouselTxt = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #fffbfbbf;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NewArrivalsTxtBox = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 56px;
  margin: 80px 0 32px 8px;
  align-items: center;
  /* @media (max-width: 767px) {
    margin: 20px 0;
    flex-direction: column;
    height: auto;
  } */
`;
export const NewArrivalsTitleTxt = styled.div`
  font-weight: 400;
  font-size: 34px;
`;

export const NewArrivalsSubTxt = styled.div`
  font-weight: 400;
  color: #999999;
  font-size: 15px;
  margin-left: 15px;
  /* @media (max-width: 767px) {
    margin-left: 0px;
    margin-top: 5px;
  } */
`;

export const ProductBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 60px;
`;
export const Product = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  align-items: center;
  /* @media (max-width: 767px) {
    width: 48%;
  } */
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 374px;
  margin-bottom: 12px;
  /* @media (max-width: 767px) {
    height: 200px;
  } */
`;

export const ProductTxt = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-top: 8px;
  /* @media (max-width: 767px) {
    font-size: 14px;
    margin-top: 5px;
  } */
`;

export const LoadBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
