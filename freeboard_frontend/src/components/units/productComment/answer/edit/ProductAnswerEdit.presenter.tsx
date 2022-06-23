import React from "react";
import { getDateList } from "../../../../commons/libraries/utils";
import ProductAnswerContainer from "../write/ProductAnswer.container";
import * as S from "./ProductAnswerEdit.styles";

export default function ProductAnswerEditPresenter(props) {
  return (
    <S.Wrapper>
      {props.isAnswerEdit === false && (
        <S.Wrap>
          <S.ProfileIcon src="/commentBoard/profile-Icon.svg" />
          <S.WrapWriteComment>
            <S.WrapWritedHeader>
              <S.WrapFrontHeader>
                <S.CommentWriter>{props.el.user.name}</S.CommentWriter>
              </S.WrapFrontHeader>
              <S.WrapBackHeader>
                <S.Answer
                  src="/images/answer.png"
                  onClick={props.onClickAnswerImg}
                  id={props.el._id}
                ></S.Answer>
                <S.Pencil
                  src="/commentBoard/Pencil.svg"
                  onClick={props.onClickEdit}
                  id={props.el._id}
                />
                <S.Delete
                  src="/commentBoard/X-Button.svg"
                  id={props.el._id}
                  onClick={props.onClickDelete}
                />
              </S.WrapBackHeader>
            </S.WrapWritedHeader>
            <S.Contents>{props.el.contents}</S.Contents>
            <S.Date>{getDateList(props.el.createdAt)}</S.Date>
          </S.WrapWriteComment>
        </S.Wrap>
      )}

      {props.isAnswerEdit === true && (
        <ProductAnswerContainer
          refetch={props.refetch}
          isAnswerEdit={props.isAnswerEdit}
          setIsAnswerEdit={props.setIsAnswerEdit}
          answerEditId={props.answerEditId}
          firstId={props.el._id}
          answerData={props.answerData}
        />
      )}
    </S.Wrapper>
  );
}
