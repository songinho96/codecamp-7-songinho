import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";

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
`;

const SliderWrap = styled(Slider)`
  width: 428px;
  height: 428px;
  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
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

export const Image = styled.img`
  width: 480px;
  height: 480px;
  border: 1px solid gray;
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
        <SliderWrap {...settings}>
          {data?.fetchUseditem.images
            ?.filter((el) => el)
            .map((el) => (
              <Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </SliderWrap>
      </SliderWrapper>
    </div>
  );
}
