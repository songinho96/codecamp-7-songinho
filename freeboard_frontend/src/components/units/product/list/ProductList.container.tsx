import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import ProductListPresenter from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import _ from "lodash";

export default function ProductListContainer() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
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

  const onClickList = (event: any) => {
    router.push(`/products/${event.currentTarget.id}`);
    // console.log(data);
  };

  const onClickMoveWrite = () => {
    router.push("/products/new");
  };

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
    />
  );
}
