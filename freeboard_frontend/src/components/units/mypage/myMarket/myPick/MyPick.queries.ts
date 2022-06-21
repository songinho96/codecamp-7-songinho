import { gql } from "@apollo/client";

export const FETCH_USED_I_PICKED = gql`
  query fetchUseditemsIPicked($page: Int) {
    fetchUseditemsIPicked(page: $page) {
      _id
      name
      price
      seller
    }
  }
`;
