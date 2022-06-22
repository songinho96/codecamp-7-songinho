import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import MyPickPresenter from "./MyPick.presenter";
import { FETCH_USED_I_PICKED } from "./MyPick.queries";

export default function MyPickContainer() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USED_I_PICKED, {
    variables: { search: "" },
  });

  const onClickMoveToDetail = (event) => {
    router.push(`/products/${event.target.id}`);
  };
  return (
    <MyPickPresenter
      data={data}
      refetch={refetch}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
