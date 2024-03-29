import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Head from "next/head";
import React, { useState } from "react";
import ProductBasketContainer from "../../product/basket/ProductBasket.container";

const Mypage = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

const MyBasket = styled.div`
  font-size: large;
`;
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
      balance
      status
    }
  }
`;

const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      userPoint {
        _id
        amount
      }
    }
  }
`;

const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
    }
  }
`;

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MypageContainer() {
  const { data } = useQuery(FETCH_USER_LOGED_IN);
  const { data: fetchPointData } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1 },
  });
  const [value, setValue] = useState(100);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangeValue = (event: any) => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "충전하기",
        amount: value,
        buyer_email: data.fetchUserLoggedIn.email,
        buyer_name: data.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // ...,
          // 결제 성공 시 로직,
          // ...
          try {
            createPointTransactionOfLoading({
              variables: {
                impUid: rsp?.imp_uid,
              },
              refetchQueries: [
                {
                  query: FETCH_USER_LOGED_IN,
                },
              ],
            });
          } catch (error: any) {
            alert(error.message);
          }
          // console.log(rsp.imp_uid);
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제 실패");
        }
      }
    );
  };

  const Click = () => {
    // console.log(data);
    // console.log(fetchPointData);
  };

  return (
    <>
      <Mypage>
        <Head>
          {/* <!-- jQuery --> */}
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          {/* <!-- iamport.payment.js --> */}
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
        <select defaultValue="100" onChange={onChangeValue}>
          <option value="100">100</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="5000">5000</option>
        </select>
        <button onClick={requestPay}>충전하기 </button>
        <button onClick={Click}>하하하</button>
        <div>{data?.fetchUserLoggedIn.email}</div>
        <div>{fetchPointData?.fetchPointTransactions.amount}</div>
        <div>{data?.fetchUserLoggedIn.userPoint.amount}</div>
      </Mypage>
      <MyBasket>찜한 상품</MyBasket>
      <ProductBasketContainer />
    </>
  );
}
