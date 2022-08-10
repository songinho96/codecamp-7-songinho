import React from "react";
import * as S from "./ProductAnswer.styles";

export default function ProductAnswerPresenter(props) {
  return (
    <>
      <form
        onSubmit={
          props.isAnswerEdit
            ? props.handleSubmit(props.onClickAnswerUpdate)
            : props.handleSubmit(props.onClickAnswer)
        }
      >
        <S.Wrapper>
          {/* 댓글 */}
          <S.WrapTitle>
            {/* <S.TitlePicture src="/commentBoard/comment.svg" /> */}

            <S.Title>{props.isAnswerEdit ? "답변 수정" : "답변 등록"}</S.Title>
          </S.WrapTitle>

          <S.WrapperWriteComment>
            <S.WriteContent
              maxLength={50}
              {...props.register("contents")}
              placeholder="답변을 적어주세요."
            />
            <S.WriteFooter>
              {/* <S.WriteNum>{props.contents.length}/100</S.WriteNum> */}
              <S.CommentButton>
                {props.isAnswerEdit ? "수정하기" : "답변하기"}
              </S.CommentButton>
              {props.isAnswer && (
                <S.CommentButton
                  type="button"
                  onClick={props.onClickBackButton}
                >
                  답변 취소
                </S.CommentButton>
              )}
              {props.isAnswerEdit && (
                <S.CommentButton
                  type="button"
                  onClick={props.onClickBackButtonEdit}
                >
                  답변 취소
                </S.CommentButton>
              )}
            </S.WriteFooter>
          </S.WrapperWriteComment>
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.Wrapper>
      </form>
    </>
  );
}
