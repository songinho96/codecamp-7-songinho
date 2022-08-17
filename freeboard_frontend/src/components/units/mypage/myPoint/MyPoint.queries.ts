import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int) {
    fetchPointTransactions(page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($page: Int, $search: String) {
    fetchPointTransactionsOfBuying(page: $page, serch: $search) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;
