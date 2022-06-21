import { useQuery } from "@apollo/client";
import React from "react";
import { FETCH_USED } from "../../../product/detail/ProductDetail.queries";

import MyPickPresenter from "./MyPick.presenter";
import { FETCH_USED_I_PICKED } from "./MyPick.queries";

export default function MyPickContainer() {
  const { data } = useQuery(FETCH_USED_I_PICKED, {
    variables: { page: 1 },
  });

  return <MyPickPresenter data={data} />;
}
