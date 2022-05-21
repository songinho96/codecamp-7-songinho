// import { useMutation, gql } from '@apollo/client'

// const CREATE_PRODUCT = gql`
//     mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
//         createProduct(seller: $seller, createProductInput: $createProductInput){
//             _id
//             number
//             message
//         }
//     }
// `

// export default function GraphqlMutationProduct(){
//     const [createProduct] = useMutation(CREATE_PRODUCT)

//     const onClickSubmit = async () => {
//         await createProduct({
//             variables: {
//                 seller: "철수",
//                 createProductInput: {
//                     name: "마우스",
//                     detail: "좋은마우스",
//                     price: 2000
//                 }
//             }
//         })
//     }

//     return (
//         <>
//             판매자: <input type="text" /><br />
//             상품명: <input type="text" /><br />
//             상품내용: <input type="text" /><br />
//             상품가격: <input type="text" /><br />
//             <input type="number" />
//             <button onClick={onClickSubmit}>상품 등록하기</button>
//         </>
//     )
// }

import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProduct() {
  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const [data, setData] = useState({});
  const [callGraphql] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await callGraphql({
      variables: {
        seller,
        createProductInput: {
          name,
          detail,
          price: Number(price),
        },
      },
    });
    setData(result.data.createProduct);
    console.log(result.data.createProduct);
    console.log(result);
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      판매자:
      <input type="text" onChange={onChangeSeller} />
      이름:
      <input type="text" onChange={onChangeName} />
      내용:
      <input type="text" onChange={onChangeDetail} />
      가격:
      <input type="text" onChange={onChangePrice} />
      <button onClick={onClickSubmit}>등록하기</button>
      <div>{data.number}</div>
      <div>{data._id}</div>
      <div>{data.message}</div>
    </div>
  );
}
