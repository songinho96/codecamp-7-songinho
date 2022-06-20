// import Carousel from './Carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from "./Main.styles";
// import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
// import ProductLargeButton from "../../../commons/button/detailLarge";

export default function MainUI(props) {
  // const { moveToPage } = useMoveToPage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <S.Position>
        <S.Wrapper>
          <S.CarouselBox>
            <Slider {...settings}>
              <S.Carousel1>
                <S.CarouselTxt>전 상품 100% 정품 검수 보장</S.CarouselTxt>
              </S.Carousel1>
              <S.Carousel2>
                <S.CarouselTxt>
                  보다 안전한 결제로 믿고 결제가능한 사이트
                </S.CarouselTxt>
              </S.Carousel2>
              <S.Carousel3>
                <S.CarouselTxt>5년 간 거래 수 10만 건 돌파!</S.CarouselTxt>
              </S.Carousel3>
            </Slider>
          </S.CarouselBox>
          <S.ResponsiveBox>
            <S.NewArrivalsTxtBox>
              <S.NewArrivalsTitleTxt>New Arrivals</S.NewArrivalsTitleTxt>
              <S.NewArrivalsSubTxt>
                새로 등록된 명품들을 만나보세요!
              </S.NewArrivalsSubTxt>
            </S.NewArrivalsTxtBox>
            <S.ProductBox>
              {/* {props.NewArrival?.map((el) => (
                <S.Product onClick={moveToPage(`market/${el.product_id}`)}>
                  <S.ProductImg
                    src={
                      "https://storage.googleapis.com/" +
                      el?.urls
                        .substring(1, el?.urls.length - 1)
                        .replace(/\"/gi, "")
                        .split("][")[0]
                    }
                  />
                  <S.ProductTxt>{el.name}</S.ProductTxt>
                  <S.ProductTxt>{el.price}원</S.ProductTxt>
                </S.Product>
              ))} */}
            </S.ProductBox>
            {/* <S.BannerChanelImg src="/images/MainPgChanelBannerImg.png" /> */}
            <S.NewArrivalsTxtBox>
              <S.NewArrivalsTitleTxt>BEST PRODUCT</S.NewArrivalsTitleTxt>
              <S.NewArrivalsSubTxt>
                지금 핫한 상품들을 만나보세요!
              </S.NewArrivalsSubTxt>
            </S.NewArrivalsTxtBox>
            <S.ProductBox>
              {/* {props.data?.fetchAllProduct
                .filter((el) => el.like > 0)
                .map((el) => (
                  <S.Product>
                    <S.ProductImg
                      src={
                        "https://storage.googleapis.com/" +
                        el?.urls
                          .substring(1, el?.urls.length - 1)
                          .replace(/\"/gi, "")
                          .split("][")[0]
                      }
                    />
                    <S.ProductTxt>{el.name}</S.ProductTxt>
                    <S.ProductTxt>{el.price}</S.ProductTxt>
                  </S.Product>
                ))} */}
            </S.ProductBox>
            <S.LoadBtn>{/* <ProductLargeButton name="더보기" /> */}</S.LoadBtn>
          </S.ResponsiveBox>
        </S.Wrapper>
      </S.Position>
    </>
  );
}
