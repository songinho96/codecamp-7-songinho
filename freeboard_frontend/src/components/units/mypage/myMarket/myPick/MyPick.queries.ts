import { gql } from "@apollo/client";

export const FETCH_USED_I_PICKED = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
      _id
      name
      price
      soldAt
      seller {
        name
      }
      createdAt
      images
      useditemAddress {
        address
      }
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
