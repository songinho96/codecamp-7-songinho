import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";
import { useAuth } from "../../../../commons/hooks/useAuth";
import MyProductPresenter from "./MyProduct.presenter";

import {
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  FETCH_USED_ITEMS_I_SOLD,
} from "./MyProduct.queries";
import _ from "lodash";

export default function MyProductContainer() {
  useAuth();
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: { page: 1 },
  });
  const { data: soldData } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);

  const onClickMoveToDetail = (event) => {
    router.push(`/products/${event.target.id}`);
    console.log(data);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <MyProductPresenter
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      refetch={refetch}
      soldData={soldData}
      onChangeSearch={onChangeSearch}
    />
  );
}
