import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Images = styled.img`
  width: 100%;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default function Banner() {
  const StyledSlider = styled(Slider)`
    .slick-dots {
      bottom: -20px;
    }
    .slick-dots li button:before {
      color: black;
      font-size: 13px;
    }

    /*화살표 크기*/
    /* .slick-prev:before,
    .slick-next:before {
      font-size: 60px;
      opacity: 1;
    }

    .slick-prev {
      opacity: 1;
      left: 10%; 
      z-index: 999;
    }

    .slick-next {
      opacity: 1;
      right: 10%;
      z-index: 999;
    } */

    /* .slick-arrow {
      display: flex;
      z-index: 10;
      width: 1vw;
      height: 1vw;
    } */

    /* .slick-prev {
      left: 50px;
      z-index: 10;
    }

    .slick-next {
      right: 50px;
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
    } */
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
    arrows: false,
    // appendDots: (dots: any) => (
    //   <div
    //     style={{
    //       color: "white",
    //       borderRadius: "10px",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
  };

  return (
    <Wrapper>
      <div>
        <StyledSlider {...settings}>
          <div>
            <Images src="/bannerImages/event1.jpeg" />
          </div>
          <div>
            <Images src="/bannerImages/event2.jpeg" />
          </div>
          <div>
            <Images src="/bannerImages/event3.jpeg" />
          </div>
        </StyledSlider>
      </div>
    </Wrapper>
  );
}
