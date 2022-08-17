import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { basketPageState } from "../../../store";
import ProductDetailPresenter from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSATION_OF_BUYING_AND_SELLING,
  DELTE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USED_ITEM_PICK,
} from "./ProductDetail.queries";

export default function ProductDetailContainer(props) {
  const router = useRouter();

  const [isBaskets, setIsBaskets] = useState(false);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.boardId },
  });
  const { data: UserData } = useQuery(FETCH_USER_LOGGED_IN);
  // console.log(data);
  // 마이 찜
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK, {
    variables: { useditemId: router.query.boardId },
  });

  const [deleteUseditem] = useMutation(DELTE_USED_ITEM);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSATION_OF_BUYING_AND_SELLING
  );

  const onClickEdit = () => {
    router.push(`/products/${router.query.boardId}/edit`);
  };

  // // 장바구니

  const [basketPage, setBasketPage] = useRecoilState(basketPageState);
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

      localStorage.setItem("baskets", JSON.stringify(Delete));
      setBasketPage(Delete);
      return;
    }

    const { __typename, ...newEl } = data.fetchUseditem;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setBasketPage(baskets);
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
    } catch (error: any) {
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
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.boardId,
            },
          },
        ],
      });
    } catch (error) {
      Modal.error({
        title: "Error 메시지",
        content: error.message,
      });
    }
  };

  const onClickBuy = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.boardId },
      });
      console.log(result);
      Modal.success({ content: "구매가 완료되었습니다!" });
      router.push("/products");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 아이디
  const seller =
    data?.fetchUseditem.seller._id === UserData?.fetchUserLoggedIn._id;

  return (
    <ProductDetailPresenter
      data={data}
      onClickEdit={onClickEdit}
      onClickBasket={onClickBasket}
      isBaskets={isBaskets}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      onClickBuy={onClickBuy}
      seller={seller}
    />
  );
}
