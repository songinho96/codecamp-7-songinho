import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";
import { breakPoints } from "../src/commons/styles/media";
import { useMoveToPage } from "../src/components/commons/hooks/useMoveToPage";
import useScrollFadeIn from "../src/components/commons/hooks/useScrollFadeIn";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  padding-top: 20px;
`;

const Title = styled.div`
  font-size: 6.25rem;

  @media ${breakPoints.tablet} {
    font-size: 5.5rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 4.2rem;
  }
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
  font-size: 2.5rem;

  @media ${breakPoints.tablet} {
    font-size: 2rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.7rem;
  }
`;

const WrapperMarket = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0;
  flex-wrap: wrap;
`;

const WrapMarket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding-top: 80px;
  :hover {
    padding-top: 50px;
    transition-duration: 1s;
  }
  transition-duration: 1s;

  @media ${breakPoints.mobile} {
    padding-top: 40px;
    :hover {
      padding-top: 40px;
    }
  }
`;

const MarketImage = styled.img`
  width: 300px;

  @media ${breakPoints.tablet} {
    width: 180px;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
  }
`;

const Label = styled.div`
  font-size: 3.125rem;
  margin-top: 10px;

  @media ${breakPoints.tablet} {
    font-size: 2.7rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 2.2rem;
  }
`;

export default function Main() {
  const { onClickMoveToPage } = useMoveToPage();
  const FadeIn = useScrollFadeIn();

  return (
    <>
      <Wrapper>
        <Head>
          <title>포트폴리오 &#58; 중고마켓 개인프로젝트 </title>
          <meta property="og:title" content="중고마켓" />
          <meta
            property="og:description"
            content="익명게시판, 중고마켓 프로젝트입니다."
          />
          <link rel="icon" href="/images/Main.svg" />
        </Head>
        <WrapperReveal {...FadeIn}>
          <WrapMainTitle>
            <Title>중고마켓</Title>
            <Title>포트폴리오</Title>
          </WrapMainTitle>
          <WrapSubTitle>
            <SubTitle>중고마켓과 익명 게시판</SubTitle>
            <SubTitle>개인 프로젝트 입니다</SubTitle>
          </WrapSubTitle>
        </WrapperReveal>
        <WrapperMarket>
          <WrapMarket onClick={onClickMoveToPage("/boards")}>
            <MarketImage src="/images/Board.png" />
            <Label>자유게시판</Label>
          </WrapMarket>
          <WrapMarket onClick={onClickMoveToPage("/products")}>
            <MarketImage src="/images/MainIcon.png" />
            <Label>중고마켓</Label>
          </WrapMarket>
          <WrapMarket
            onClick={onClickMoveToPage("/mypage/mymarket/myproducts")}
          >
            <MarketImage src="/images/MyIcon.png" />
            <Label>마이페이지</Label>
          </WrapMarket>
        </WrapperMarket>
      </Wrapper>
    </>
  );
}
