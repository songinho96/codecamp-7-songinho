import React from "react";
import * as S from "./write.styles";
export default function ImageWritePresenter(props: any) {
  return (
    <>
      <S.UploadFileHidden type="file" onChange={props.onChangeFile} />
      <S.UploadButton>이미지등록</S.UploadButton>
    </>
  );
}
