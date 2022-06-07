import React from "react";
import * as S from "./UploadBasic.styles";

export default function UploadBasicPresenter(props) {
  return (
    <>
      <S.WrapperSearch>
        <S.InputSearch
          onChange={props.onChangeSearch}
          type="text"
          placeholder="제목을 입력해주세요."
        />
        <S.DateSearch type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
        <S.ButtonSearch>검색하기</S.ButtonSearch>
      </S.WrapperSearch>
    </>
  );
}
