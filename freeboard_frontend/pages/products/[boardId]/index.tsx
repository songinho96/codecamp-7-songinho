import React from "react";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ProductDetailContainer from "../../../src/components/units/product/detail/ProductDetail.container";
import ProductQuestionListContainer from "../../../src/components/units/productComment/list/ProductQuestionList.container";

import ProductQuestionWriteContainer from "../../../src/components/units/productComment/write/ProductQuestionWrite.container";

export default function ProductDetailPage() {
  useAuth();
  return (
    <>
      <ProductDetailContainer />
      <ProductQuestionWriteContainer />
      <ProductQuestionListContainer />
    </>
  );
}
