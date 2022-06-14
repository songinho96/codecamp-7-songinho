import { useQuery } from "@apollo/client";
import React from "react";
import ProductDetailPresenter from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetailContainer() {
  const { data } = useQuery(FETCH_USED_ITEM);
  return <ProductDetailPresenter />;
}
