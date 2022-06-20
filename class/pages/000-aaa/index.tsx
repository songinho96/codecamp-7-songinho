import { useMutation } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import { CREATE_POINT_LOADING } from "../user/mypage/UserMypage.quries";
declare const window: typeof globalThis & {
  IMP: any;
};
export default function PaymentPage() {
  const [money, setMoney] = useState();
  const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_LOADING);

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //    merchant_uid: "ORD20180131-0000011",
        name: "요정하니의 축복",
        amount: money,
        buyer_email: "oioimandumandu@gmail.com",
        buyer_name: "만두",
        buyer_tel: "010-222-2222",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost::3000/28-01-payment",
      },
      (rsp: any) => {
        // 응답
        // callback
        if (rsp.success) {
          console.log(rsp);
          try {
            const result = createPointTransactionOfLoading({
              variables: {
                impUid: rsp?.imp_uid,
              },
            });
            console.log(result);
          } catch (error) {
            alert(error.message);
          }
          // ...,
          // 결제 성공 시 로직,
          // ...
          // 백엔드에 결제관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다! 다시 시도해주세요.");
        }
      }
    );
  };

  // const receivePay = async () => {
  //   try {
  //     const result = await createPointTransactionOfLoading({
  //       variables: {
  //         impUid: data?.imp_uid,
  //       },
  //     });
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  const onChangeValue = (event) => {
    setMoney(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <h1>포인트 충전하기</h1>
      <select onChange={onChangeValue} name="money">
        <option value="">금액선택</option>
        <option value="1004">1004원</option>
        <option value="3000">3000원</option>
        <option value="5000">5000원</option>
      </select>
      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}
