import styled from "@emotion/styled";
import Slider from "react-slick";

const Wrapper = styled.div`
  padding: 100px;
  background-color: #f2ea00;
`;

const Image = styled.img`
  margin: auto;
`;

export default function LayoutBannerQuiz() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <Image src="/images/dog.jpeg" />
        </div>
        <div>
          <Image src="/images/dog.jpeg" />
        </div>
        <div>
          <Image src="/images/dog.jpeg" />
        </div>
        <div>
          <Image src="/images/dog.jpeg" />
        </div>
        <div>
          <Image src="/images/dog.jpeg" />
        </div>
        <div>
          <Image src="/images/dog.jpeg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
