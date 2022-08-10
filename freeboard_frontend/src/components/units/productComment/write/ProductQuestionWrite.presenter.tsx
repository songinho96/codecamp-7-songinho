import * as S from "./ProductQuestionWrite.styles";

export default function ProductQuestionWritePresenter(props) {
  return (
    <S.Wrapper>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickComment)
        }
      >
        <S.Body>
          {/* 댓글 */}
          <S.WrapTitle>
            {/* <S.TitlePicture src="/commentBoard/comment.svg" /> */}

            <S.Title>{props.isEdit ? "문의 수정" : "문의 등록"}</S.Title>
          </S.WrapTitle>

          <S.WrapperWriteComment>
            <S.WriteContent
              maxLength={50}
              // type="text"
              {...props.register("contents")}
              placeholder="문의 내용을 적어주세요."
            />
            <S.WriteFooter>
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
        </S.Body>
      </form>
    </S.Wrapper>
  );
}
