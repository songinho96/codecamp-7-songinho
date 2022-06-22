import React, { ChangeEvent } from "react";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import * as S from "./SearchbarMymarket.styles";
import _ from "lodash";

export default function SearchbarMymarketPresenter(props) {
  const { onClickMoveToPage } = useMoveToPage();

  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // setSearch(event.target.value);
  };
  return (
    <S.Wrapper>
      <S.WrapMove>
        <S.Myproduct onClick={onClickMoveToPage("/mypage/mymarket/myproducts")}>
          나의 상품
        </S.Myproduct>
        <S.Mypick onClick={onClickMoveToPage("/mypage/mymarket/mypick")}>
          마이찜
        </S.Mypick>
      </S.WrapMove>
      <S.WrapperSearch>
        <S.Searchbar
          placeholder="상품을 검색해주세요"
          onChange={onChangeSearch}
        />
      </S.WrapperSearch>
    </S.Wrapper>
  );
}
