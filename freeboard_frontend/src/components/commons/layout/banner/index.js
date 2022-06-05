import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Images = styled.img`
  height: 400px;
  width: 100%;
  border-radius: 0;
`;

const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 0%;
`;

export default function Banner() {
  const StyledSlider = styled(Slider)`
    .slick-dots {
      bottom: 20px;
    }
    /* .slick-dots li button:before {
      color: black;
    } */
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,

    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper>
      <div>
        <StyledSlider {...settings}>
          <div>
            <Images src="/bannerImages/banner4.jpeg" />
          </div>
          <div>
            <Images src="/bannerImages/banner1.jpeg" />
          </div>
          <div>
            <Images src="/bannerImages/banner2.jpeg" />
          </div>
          <div>
            <Images src="/bannerImages/banner3.jpeg" />
          </div>
        </StyledSlider>
      </div>
    </Wrapper>
  );
}
