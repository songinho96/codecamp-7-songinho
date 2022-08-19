import styled from "@emotion/styled";
import Slider from "react-slick";

export const SliderWrapper = styled.div`
  .slick-prev {
    left: -70px;
  }

  .slick-next {
    right: 40px;
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
    right: 50px;
  }
  .slick-dots li button:before {
    color: blue;
    font-size: 15px;
  }
`;

export const SliderWrap = styled(Slider)`
  width: 800px;
  margin-left: 100px;
`;

export const Wrapper = styled.div`
  width: 1024px;
  border: 1px solid black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  font-size: 20px;
  padding-top: 20px;
`;
// header

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
`;

export const BestPost = styled.div`
  text-align: center;
  font-size: 60px;
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
  height: 320px;
  border: 1px solid black;
`;

export const BestImage = styled.img`
  width: 282px;
  height: 200px;
  border: 1px solid black;
  cursor: pointer;
`;

export const BestTitle = styled.div`
  font-size: 1.2rem;
  padding: 20px 10px 10px 10px;
  font-weight: 700;
`;

export const WrapBestInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`;

export const WrapperProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
`;

export const ProfileIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const ProfileWriter = styled.div`
  font-size: 1rem;
`;

export const WrapDate = styled.div`
  font-size: 0.7rem;
  color: #a8a8a8;
`;

export const WrapperThumbs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thumbsup = styled.img`
  width: 20px;
  height: 18px;
`;

export const TuumbsCount = styled.div`
  font-size: 16px;
`;
