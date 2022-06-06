import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Images = styled.img`
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0px 16px 48px;
`;

const Wrapper = styled.div`
  width: 100%;
  border-radius: 0%;
`;

export default function Banner() {
  const StyledSlider = styled(Slider)`
    .slick-dots {
      bottom: 260px;
    }
    .slick-dots li button:before {
      color: blue;
    }
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
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
