import React from "react";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";

import ProductWriteContainer from "../../../src/components/units/product/write/ProductWrite.container";

export default function ProductWritePage() {
  useAuth();
  return <ProductWriteContainer isEdit={false} />;
}
