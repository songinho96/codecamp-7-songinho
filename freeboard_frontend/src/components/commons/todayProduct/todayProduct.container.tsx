import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import * as S from "./todayProduct.styles";

interface IPickItems {
  _id: string;
  images: string;
  name: string;
  price: number;
}

export default function TodayProductPage() {
  const router = useRouter();
  const [todayItems, setTodayItems] = useState<IPickItems[]>([]);

  useEffect(() => {
    const today = JSON.parse(sessionStorage.getItem("today") || "[]");
    setTodayItems(today);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "120px" }}> {dots} </ul>
      </div>
    ),
  };

  const onClickMoveToDetail = (event) => {
    router.push(`./products/${event.target.id}`);
  };
  return (
    <div>
      <S.Wrapper>
        <S.Label>오늘본 상품</S.Label>
        <S.WrapperProductMini>
          <div>
            <S.StyledSlider {...settings}>
              {todayItems.map((el) => (
                <S.WrapProductList
                  key={el._id}
                  id={el._id}
                  // onClick={props.onClickList(el)}
                >
                  <S.Wrap>
                    <S.ProductImage
                      src={
                        el.images[0]
                          ? `https://storage.googleapis.com/${el.images[0]}`
                          : "/list/noimage.gif"
                      }
                      id={el._id}
                      onClick={onClickMoveToDetail}
                    />
                    <S.WrapProductDetail>
                      <S.ProductName>{el.name}</S.ProductName>
                      <S.ProductPrice>{el.price}원</S.ProductPrice>
                    </S.WrapProductDetail>
                  </S.Wrap>
                </S.WrapProductList>
              ))}
            </S.StyledSlider>
          </div>
        </S.WrapperProductMini>
      </S.Wrapper>
    </div>
  );
}
