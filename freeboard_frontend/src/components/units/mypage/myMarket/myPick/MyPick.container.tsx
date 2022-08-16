import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";
import { useAuth } from "../../../../commons/hooks/useAuth";
import MyPickPresenter from "./MyPick.presenter";
import {
  FETCH_USED_ITEMS_COUNT_I_PICKED,
  FETCH_USED_I_PICKED,
} from "./MyPick.queries";
import _ from "lodash";

export default function MyPickContainer() {
  useAuth();
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USED_I_PICKED, {
    variables: { search: "" },
  });

  const { data: pickCount } = useQuery(FETCH_USED_ITEMS_COUNT_I_PICKED);

  const onClickMoveToDetail = (event) => {
    router.push(`/products/${event.target.id}`);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <MyPickPresenter
      data={data}
      refetch={refetch}
      onClickMoveToDetail={onClickMoveToDetail}
      onChangeSearch={onChangeSearch}
      pickCount={pickCount}
    />
  );
}
