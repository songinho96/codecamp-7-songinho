import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import ProductWriteContainer from "../../../../src/components/units/product/write/ProductWrite.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      pricec
      tags
      images
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { boardId: router.query.boardId },
  });
  return <ProductWriteContainer isEdit={true} boardData={data} />;
}
