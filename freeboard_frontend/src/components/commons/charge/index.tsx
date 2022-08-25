import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Head from "next/head";

import { Button, Modal } from "antd";
import { useState } from "react";

const Mypage = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding-bottom: 20px;
`;

const Select = styled.select`
  width: 50%;
`;

const Option = styled.option``;

const Image = styled.img`
  width: 100px;
  padding-bottom: 40px;
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

declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyProductChargePage() {
  const { data } = useQuery(FETCH_USER_LOGED_IN);

  const [value, setValue] = useState(100);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangeValue = (event: any) => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
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
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
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
            // console.log(result);
            Modal.success({
              title: "결제성공",
              content: "포인트가 충전 되었습니다!",
            });
          } catch (error: any) {
            Modal.error({ content: error.message });
          }
          console.log(rsp.imp_uid);
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제 실패");
        }
      }
    );
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
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
        <Button type="primary" onClick={showModal}>
          충전하기
        </Button>
        <Modal
          title="충전하기"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Mypage>
            <Image src="/images/chargePig.png" />
            <Label>충전하실 금액을 선택해 주세요!</Label>
            <Select defaultValue="100" onChange={onChangeValue}>
              <Option value="100">100</Option>
              <Option value="1000">1000</Option>
              <Option value="2000">2000</Option>
              <Option value="5000">5000</Option>
            </Select>
          </Mypage>
        </Modal>
      </div>
    </>
  );
}
