import styled from "@emotion/styled";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

const schema = yup.object({
  date: yup
    .string()
    .required("달력 필수 입력")
    .matches(/^\d{4}.\d{2}.\d{2}$/, "달력형식 입력"),
  phoneNumber: yup
    .string()
    .required("번호 필수 입력")
    .matches(/^\d{3}-\d{4}-\d{4}$/, "번호 형식 입력"),
  email: yup
    .string()
    .required("메일 필수 입력")
    .matches(/^\w+@\w+\.\w+$/, "이메일 형식 입력"),
});

export default function Quiz() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit}>
      날짜: <input type="text" {...register("date")} />
      <Error>{formState.errors.date?.message}</Error>
      번호: <input type="text" {...register("phoneNumber")} />
      <Error>{formState.errors.phoneNumber?.message}</Error>
      이메일: <input type="text" {...register("email")} />
      <Error>{formState.errors.email?.message}</Error>
    </form>
  );
}
