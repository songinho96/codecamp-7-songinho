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
            <S.TitlePicture src="/commentBoard/comment.svg" />

            <S.Title>{props.isAnswerEdit ? "답변 수정" : "답변 등록"}</S.Title>
          </S.WrapTitle>

          <S.WrapperWriteComment>
            <S.WriteContent
              maxLength={100}
              type="text"
              {...props.register("contents")}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
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
