import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import ProductListPresenter from "./ProductList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./ProductList.queries";
import _ from "lodash";

export default function ProductListContainer() {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
    },
  });

  const { data: BestData } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

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

  const onClickList = (el) => (event: any) => {
    const today = JSON.parse(sessionStorage.getItem("today") || "[]");
    // setIsBaskets(true);

    const temp = today.filter((today: any) => today._id === el._id);
    if (temp.length === 1) {
      router.push(`/products/${event.currentTarget.id}`);
      return;
    }
    if (today.length > 2) {
      today.pop();
    }

    const { __typename, ...newEl } = el;
    today.unshift(newEl);
    sessionStorage.setItem("today", JSON.stringify(today));
    router.push(`/products/${event.currentTarget.id}`);
  };

  // 오늘본 상품

  const onClickMoveWrite = () => {
    router.push("/products/new");
  };

  // 끝~~~~~~
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // setSearch(event.target.value);
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
      <div>
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
      onChangeSearch={onChangeSearch}
      BestData={BestData}
    />
  );
}
