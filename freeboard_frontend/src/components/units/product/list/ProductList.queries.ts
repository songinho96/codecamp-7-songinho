import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      name
      price
      tags
      _id
      remarks
      contents
      images
    }
  }
`;
