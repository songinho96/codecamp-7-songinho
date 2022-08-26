import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";

import { breakPoints } from "../../../commons/styles/media";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      images
    }
  }
`;

const SliderWrapper = styled.div`
  margin-right: 30px;

  @media ${breakPoints.tablet} {
    margin-right: 0;
  }

  @media ${breakPoints.mobile} {
    margin-right: 0;
  }
`;

const SliderWrap = styled(Slider)`
  width: 428px;
  height: 428px;

  .slick-prev {
    left: -50px;

    @media ${breakPoints.mobile} {
      left: 20px;
      z-index: 999;
    }
  }

  .slick-next {
    right: -50px;

    @media ${breakPoints.mobile} {
      right: 20px;
    }
  }
  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
    font-size: 25px;

    @media ${breakPoints.mobile} {
      color: white;
    }
  }
  .slick-next:before {
    opacity: 1;
    color: black;
    font-size: 25px;

    @media ${breakPoints.mobile} {
      color: white;
    }
  }

  .slick-dots {
    bottom: -90px;

    @media ${breakPoints.tablet} {
      bottom: 10px;
    }

    @media ${breakPoints.mobile} {
      bottom: 10px;
    }
  }
  .slick-dots li button:before {
    color: blue;
    font-size: 15px;

    @media ${breakPoints.mobile} {
      color: white;
    }
  }

  @media ${breakPoints.mobile} {
    width: 300px;
    height: 300px;
  }
`;

const Images = styled.img`
  width: 480px;
  height: 480px;
  border: 1px solid gray;

  @media ${breakPoints.mobile} {
    width: 300px;
    height: 300px;
  }
`;

export default function ProductImage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.boardId },
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <SliderWrapper>
        {data?.fetchUseditem.images[0] ? (
          <SliderWrap {...settings}>
            {data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <Images key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </SliderWrap>
        ) : (
          <Images src="/images/noimage.gif/" />
        )}
      </SliderWrapper>
    </div>
  );
}
