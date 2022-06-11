import React from "react";
import * as S from "./UploadBasic.styles";
export default function UploadBasicPresenter(props) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickImage}
          src={`http://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.PlusIcon onClick={props.onClickImage}></S.PlusIcon>
      )}
      <S.UploadButtonHidden
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
