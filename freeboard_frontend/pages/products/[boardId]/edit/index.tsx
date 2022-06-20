import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import ProductWriteContainer from "../../../../src/components/units/product/write/ProductWrite.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();

  const { data, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.boardId },
  });

  return loading ? (
    <></>
  ) : (
    <ProductWriteContainer isEdit={true} productData={data} />
  );
}
