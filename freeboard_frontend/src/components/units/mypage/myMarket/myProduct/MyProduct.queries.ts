import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($page: Int, $search: String) {
    fetchUseditemsISold(page: $page, search: $search) {
      _id
      name
      price
      createdAt
      soldAt
      images
      useditemAddress {
        address
      }
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;
