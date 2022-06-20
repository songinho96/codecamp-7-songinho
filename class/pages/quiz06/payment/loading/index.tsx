import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentLoadingPage() {
  const [value, setValue] = useState();
  const router = useRouter();

  const onChangeValue = (event: any) => {
    console.log(event.target.value);
    setValue(event.target.value);
    console.log(value);
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp44577801");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "충전하기",
        amount: value,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
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
          router.push("/quiz06/payment/complete");
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제 실패");
        }
      }
    );
  };

  return (
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
      <select defaultValue="1" onChange={onChangeValue}>
        <option value="500">500</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="5000">5000</option>
      </select>
      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}
