import styled from "@emotion/styled";
import Slider from "react-slick";

export const SliderWrapper = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-prev {
    left: -70px;
  }

  .slick-next {
    right: 70px;
  }
  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
    font-size: 25px;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
    font-size: 25px;
  }

  .slick-dots {
    right: 100px;
    bottom: -60px;
  }
  .slick-dots li button:before {
    color: blue;
    font-size: 15px;
  }
`;

export const SliderWrap = styled(Slider)`
  width: 1200px;
  padding-left: 80px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px auto;
  padding: 80px 102px 0px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  font-size: 20px;
`;
// header

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 80px;
`;

export const BestPost = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 40px;
`;

export const WrapperBest = styled.div`
  display: flex;
`;

export const WrapBest = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 257px;
  border: 1px solid black;
`;

export const BestImage = styled.img`
  width: 282px;
  height: 120px;
  border: 1px solid black;
  cursor: pointer;
`;

export const BestTitle = styled.div`
  font-size: 18px;
  padding-top: 20px;
`;

export const WrapBestInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapProfile = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ProfileWriter = styled.div`
  font-size: 16px;
`;

export const WrapDate = styled.div`
  font-size: 12px;
`;

export const WrapperThumbs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbsup = styled.img`
  width: 20px;
  height: 18px;
`;

export const TuumbsCount = styled.div`
  font-size: 16px;
`;
