import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import ProductDetailPresenter from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetailContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.boardId },
  });
  console.log(data);

  return <ProductDetailPresenter data={data} />;
}
