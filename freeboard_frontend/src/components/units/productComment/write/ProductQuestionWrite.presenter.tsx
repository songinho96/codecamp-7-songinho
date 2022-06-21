import * as S from "./ProductQuestionWrite.styles";

export default function ProductQuestionWritePresenter(props) {
  return (
    <>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickComment)
        }
      >
        <S.Wrapper>
          {/* 댓글 */}
          <S.WrapTitle>
            <S.TitlePicture src="/commentBoard/comment.svg" />

            <S.Title>{props.isEdit ? "문의 수정" : "문의 등록"}</S.Title>
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
                {props.isEdit ? "수정하기 " : "문의하기"}
              </S.CommentButton>
              {props.isEdit && (
                <S.CommentButton
                  type="button"
                  onClick={props.onClickBackButton}
                >
                  수정 취소
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
