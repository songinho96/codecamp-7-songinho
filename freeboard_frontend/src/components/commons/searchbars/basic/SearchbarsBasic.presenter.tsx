import React from "react";
import * as S from "./SearchbarsBasic.styles";

export default function SearchbarBasicPresenter(props) {
  return (
    <S.WrapperSearch>
      <S.InputSearch
        onChange={props.onChangeSearch}
        type="text"
        placeholder="제목을 입력해주세요."
      />
    </S.WrapperSearch>
  );
}
