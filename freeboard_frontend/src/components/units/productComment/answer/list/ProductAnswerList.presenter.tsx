import React from "react";

import ProductAnswerEditContainer from "../edit/ProductAnswerEdit.container";
import * as S from "./ProductAnswerList.styles";

export default function ProductAnswerListPresenter(props) {
  return (
    <S.Wrapper>
      {props.answerData?.fetchUseditemQuestionAnswers.map((el) => (
        <S.Wrap key={el._id}>
          <ProductAnswerEditContainer
            refetch={props.refetch}
            key={el._id}
            onClickDelete={props.onClickDelete}
            el={el}
            answerData={props.answerData}
          />
        </S.Wrap>
      ))}
    </S.Wrapper>
  );
}
