import React from "react";
import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import ProductBasketContainer from "../../../src/components/units/product/basket/ProductBasket.container";

export default function BasketPage() {
  useAuth();
  return <ProductBasketContainer />;
}
