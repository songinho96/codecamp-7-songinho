import React from "react";
import { ISearchbarBasicPresenterProps } from "./SearchbarBasic.types";
import * as S from "./SearchbarsBasic.styles";

export default function SearchbarBasicPresenter(
  props: ISearchbarBasicPresenterProps
) {
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
