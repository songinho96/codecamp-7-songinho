import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ProductDetailPresenter from "./ProductDetail.presenter";
import {
  DELTE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";

export default function ProductDetailContainer() {
  const router = useRouter();

  const [isBaskets, setIsBaskets] = useState(false);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.boardId },
  });
  console.log(data);
  // 마이 찜
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK, {
    variables: { useditemId: router.query.boardId },
  });

  const [deleteUseditem] = useMutation(DELTE_USED_ITEM);

  const onClickEdit = () => {
    router.push(`/products/${router.query.boardId}/edit`);
  };

  // // 장바구니

  const onClickBasket = () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setIsBaskets(true);

    const temp = baskets.filter(
      (basket: any) => basket._id === data.fetchUseditem._id
    );
    if (temp.length === 1) {
      // alert("이미 담으신 물품입니다!");
      // return;
      setIsBaskets(false);

      const Delete = baskets.filter(
        (baskets: any) => baskets._id !== data.fetchUseditem._id
      );
      console.log(baskets);
      localStorage.setItem("baskets", JSON.stringify(Delete));
      return;
    }

    const { __typename, ...newEl } = data.fetchUseditem;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.boardId },
      });
      Modal.success({
        content: "게시물이 삭제 되었습니다",
      });
      router.push(`/products`);
    } catch (error) {
      // console.log(error);
      Modal.error({
        title: "Error 메시지",
        content: error.message,
      });
    }
  };

  // 마이찜
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.boardId },
      });
      Modal.success({
        title: "마이찜!",
        content: "상품이 마이찜에 등록되었습니다!",
      });
    } catch (error) {
      Modal.error({
        title: "Error 메시지",
        content: error.message,
      });
    }
  };

  return (
    <ProductDetailPresenter
      data={data}
      onClickEdit={onClickEdit}
      onClickBasket={onClickBasket}
      isBaskets={isBaskets}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
    />
  );
}
