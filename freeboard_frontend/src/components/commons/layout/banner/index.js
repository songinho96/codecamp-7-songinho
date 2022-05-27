import styled from "@emotion/styled";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Images = styled.img`
  margin: auto;
`;

const Wrapper = styled.div`
  height: 700px;
  padding: 100px;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div>
            <Images src="/images/dog.jpeg" />
          </div>
          <div>
            <Images src="/images/dog.jpeg" />
          </div>
          <div>
            <Images src="/images/dog.jpeg" />
          </div>
          <div>
            <Images src="/images/dog.jpeg" />
          </div>
          <div>
            <Images src="/images/dog.jpeg" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
