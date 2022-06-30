import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../../../commons/hooks/useAuth";
import MyProductPresenter from "./MyProduct.presenter";

import { FETCH_USED_ITEMS_I_SOLD } from "./MyProduct.queries";

export default function MyProductContainer() {
  useAuth();
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 1 },
  });

  const onClickMoveToDetail = (event) => {
    router.push(`/products/${event.target.id}`);
    console.log(data);
  };

  return (
    <MyProductPresenter
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      refetch={refetch}
    />
  );
}
