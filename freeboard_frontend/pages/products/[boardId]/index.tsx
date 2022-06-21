import React from "react";
import ProductDetailContainer from "../../../src/components/units/product/detail/ProductDetail.container";
import ProductQuestionListContainer from "../../../src/components/units/productComment/list/ProductQuestionList.container";

import ProductQuestionWriteContainer from "../../../src/components/units/productComment/write/ProductQuestionWrite.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetailContainer />
      <ProductQuestionWriteContainer />
      <ProductQuestionListContainer />
    </>
  );
}
