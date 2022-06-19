import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ProductDetailPresenter from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetailContainer() {
  const router = useRouter();

  const [isBaskets, setIsBaskets] = useState(false);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.boardId },
  });

  const onClickEdit = () => {
    router.push(`/products/${router.query.boardId}/edit`);
  };

  // // 장바구니

  const onClickBasket = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setIsBaskets(true);

    const temp = baskets.filter(
      (basket) => basket._id === data.fetchUseditem._id
    );
    if (temp.length === 1) {
      // alert("이미 담으신 물품입니다!");
      // return;
      setIsBaskets(false);

      const Delete = baskets.filter(
        (baskets) => baskets._id !== data.fetchUseditem._id
      );
      console.log(baskets);
      localStorage.setItem("baskets", JSON.stringify(Delete));
      return;
    }

    const { __typename, ...newEl } = data.fetchUseditem;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  return (
    <ProductDetailPresenter
      data={data}
      onClickEdit={onClickEdit}
      onClickBasket={onClickBasket}
      isBaskets={isBaskets}
    />
  );
}
