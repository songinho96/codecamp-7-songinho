import { gql } from "@apollo/client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import ButtonQuiz from "../../../src/components/commons/buttons/quiz";

import InputQuiz from "../../../src/components/commons/inputs/quiz";

const Error = styled.div`
  color: red;
  font-size: 12px;
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 5글자 이내 문자열입니다.")
    .required("작성자는 필수 입력 사항입니다."),
  // .matches(/^[가-힣\w]{1,5}$/, "작성자는 5글자 이내 문자열 입니다."),
  password: yup
    .string()
    // .max(8, "비밀번호는 8자리 이내 문자열입니다.")
    .required("비밀번호는 필수 입력 사항")
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*()_+])[A-Za-z\d~!@#$%^&*()_+]{1,8}$/,
      "비밀번호 8자리"
    ),
  title: yup
    .string()
    .required("제목은 필수 입력 사항입니다.")
    .max(100, "100자 이내 문자열 입니다."),
  contents: yup
    .string()
    .required("내용은 필수 입력 사항입니다.")
    .max(1000, "1000자 이내 문자열 입니다."),
});

export default function ReactHookForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <InputQuiz type="text" register={register("writer")} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호: <InputQuiz type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      제목: <InputQuiz type="text" register={register("title")} />
      <Error>{formState.errors.title?.message}</Error>
      내용: <InputQuiz type="text" register={register("contents")} />
      <Error>{formState.errors.contents?.message}</Error>
      <ButtonQuiz isActive={formState.isValid} title="로그인하기" />
    </form>
  );
}
