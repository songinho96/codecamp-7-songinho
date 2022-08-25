import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEvent } from "react";
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
    variables: { page: 1, search: "" },
  });

  const { data: soldCount, refetch: refetchCount } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_SOLD
  );

  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${event.currentTarget.id}`);
    console.log(data);
  };

  const getDebounce = _.debounce((searchData: string) => {
    refetch({ search: searchData, page: 1 });
    refetchCount({ search: searchData });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <MyProductPresenter
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      soldCount={soldCount}
      onChangeSearch={onChangeSearch}
      refetch={refetch}
    />
  );
}
