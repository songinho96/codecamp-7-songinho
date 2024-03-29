import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

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
  // useRouter() 사용
  const router = useRouter();

  // useMutation() 사용
  const [createProduct] = useMutation(CREATE_PRODUCT);

  // useState("") 사용
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      console.log(result);
      router.push(`/04-quiz-4-routed/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  // onChangeHandler
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
    <>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={onChangeName} />
      <br />
      상품내용: <input type="text" onChange={onChangeDetail} />
      <br />
      상품가격: <input type="text" onChange={onChangePrice} />
      <br />
      <input type="number" />
      <button onClick={onClickSubmit}>상품 등록하기</button>
    </>
  );
}
