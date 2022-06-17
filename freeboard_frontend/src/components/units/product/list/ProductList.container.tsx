import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import ProductListPresenter from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";

export default function ProductListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickList = (event) => {
    router.push(`/products/${event.currentTarget.id}`);
    // console.log(data);
  };

  const onClickMoveWrite = () => {
    router.push("/products/new");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    appendDots: (dots: any) => (
      <div
      // style={{
      //   backgroundColor: "#ddd",
      //   borderRadius: "10px",
      //   padding: "10px",
      // }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <ProductListPresenter
      data={data}
      loadFunc={loadFunc}
      settings={settings}
      onClickList={onClickList}
      onClickMoveWrite={onClickMoveWrite}
    />
  );
}
