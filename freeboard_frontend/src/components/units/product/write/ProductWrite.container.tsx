import React from "react";
import ProductWritePresenter from "./ProductWrite.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USED_ITEM } from "./ProductWrite.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력 사항입니다."),
  contents: yup.string().required("상품설명은 필수 입력 사항입니다."),
  price: yup.number().required("가격은 필수 입력 사항입니다."),
});

export default function ProductWriteContainer() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
          },
        },
      });
      console.log(result);
      Modal.success({
        title: "등록 성공!",
        content: "상품이 등록되었습니다!",
      });
      router.push(`/products/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error);
      Modal.error({
        title: "Error 메시지",
        content: "상품 등록 실패 !!!",
      });
    }
  };
  return (
    <ProductWritePresenter
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
    />
  );
}
