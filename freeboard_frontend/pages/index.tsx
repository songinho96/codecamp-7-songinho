import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

import React from "react";

import Fade from "react-reveal/Fade";
import Slider from "react-slick";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      images
    }
  }
`;

const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px auto;
  /* padding: 80px 102px 100px 102px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 16px 48px;
  box-sizing: border-box;
  background-color: white;
`;

const Wrapaaa = styled.div`
  height: 2000px;
`;

const Title = styled.div`
  font-size: 100px;
`;

const WrapperReveal = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

const WrapSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: 40px;
`;

const SliderWrapper = styled.div`
  /* margin: auto; */
`;

const SliderWrap = styled(Slider)`
  margin: auto;
  width: 1200px;
  height: 73px;

  .slick-prev {
    left: -100px;
  }

  .slick-next {
    right: -100px;
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
    bottom: -60px;
  }
  .slick-dots li button:before {
    color: blue;
    font-size: 15px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 140px;
  border: 1px solid gray;
  margin-right: 50px;
`;
const WrapImage = styled.div`
  display: flex;
  margin-right: 10px;
  /* margin: auto; */
`;

export default function Main() {
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: "62c2b07903610b0029993143" },
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Wrapper>
        <Wrapaaa>스크롤</Wrapaaa>
        <WrapperReveal>
          <WrapMainTitle>
            <Fade bottom duration={3000}>
              <Title>당신이 끝까지 읽을 책을</Title>
            </Fade>
            <Fade bottom duration={4000}>
              <Title>알려주는 완독 지수</Title>
            </Fade>
          </WrapMainTitle>
          <WrapSubTitle>
            <Fade bottom duration={5000}>
              <SubTitle>독자들이 픽한</SubTitle>
            </Fade>
            <Fade bottom duration={7000}>
              <SubTitle>인기 분야 소설을 확인해 보세요</SubTitle>
            </Fade>
          </WrapSubTitle>
        </WrapperReveal>
      </Wrapper>

      <SliderWrapper>
        <SliderWrap {...settings}>
          {data?.fetchUseditem.images
            ?.filter((el) => el)
            .map((el) => (
              <>
                <WrapImage key={el}>
                  <Image src={`https://storage.googleapis.com/${el}`} />
                  <Image src={`https://storage.googleapis.com/${el}`} />
                </WrapImage>
              </>
            ))}
        </SliderWrap>
      </SliderWrapper>
    </>
  );
}
