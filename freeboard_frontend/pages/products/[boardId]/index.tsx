import React from "react";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ProductDetailContainer from "../../../src/components/units/product/detail/ProductDetail.container";

export default function ProductDetailPage() {
  useAuth();
  return (
    <>
      <ProductDetailContainer />
    </>
  );
}
