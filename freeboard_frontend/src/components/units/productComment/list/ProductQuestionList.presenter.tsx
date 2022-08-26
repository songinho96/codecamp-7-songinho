import InfiniteScroll from "react-infinite-scroller";

import ProductQuestionItemContainer from "../edit/ProductQuestionItem.container";

import * as S from "./ProductQuestionList.styles";
import {
  Iel,
  IProductQuestionListPresenterProps,
} from "./ProductQuestionList.types";

export default function ProductQuestionListPresenter(
  props: IProductQuestionListPresenterProps
) {
  return (
    <S.Wrapper>
      <S.Scroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true || false}
          useWindow={false}
        >
          {props.data?.fetchUseditemQuestions.map((el: Iel) => (
            <S.WrapperComment key={el._id}>
              <ProductQuestionItemContainer
                key={el._id}
                el={el}
                onClickDelete={props.onClickDelete}
              />
            </S.WrapperComment>
          ))}
        </InfiniteScroll>
      </S.Scroll>
    </S.Wrapper>
  );
}
