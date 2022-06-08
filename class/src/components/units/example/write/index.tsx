import React from "react";

export default function QuizRecoil(props: any) {
  return <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>;
}
