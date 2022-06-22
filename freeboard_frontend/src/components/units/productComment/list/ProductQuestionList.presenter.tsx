import InfiniteScroll from "react-infinite-scroller";
import { getDateList } from "../../../commons/libraries/utils";
import ProductQuestionItemContainer from "../edit/ProductQuestionItem.container";
import ProductQuestionWriteContainer from "../write/ProductQuestionWrite.container";
import * as S from "./ProductQuestionList.styles";

export default function ProductQuestionListPresenter(props) {
  return (
    <S.Wrapper>
      <S.Scroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true || false}
          useWindow={false}
        >
          {props.data?.fetchUseditemQuestions.map((el) => (
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
