import { getDate } from "../../../commons/libraries/utils";
import * as S from "./BoardComment.styles";

export default function BoardCommentUI(props) {
  return (
    <S.Wrapper>
      {/* 댓글 */}
      <S.WrapTitle>
        <S.TitlePicture src="/commentBoard/comment.svg" />
        <S.Title>댓글</S.Title>
      </S.WrapTitle>
      {/* 작성자, 비밀번호, 별 */}
      <S.WrapCommentWrite>
        <S.WrapError>
          <S.Writer
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          />
          <S.Error>{props.writerError}</S.Error>
        </S.WrapError>
        <S.WrapError>
          <S.Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <S.Error>{props.passwordError}</S.Error>
        </S.WrapError>
        <S.star src="/commentBoard/star.svg" />
      </S.WrapCommentWrite>
      {/* 댓글쓰는곳 */}

      <S.WrapperWriteComment>
        <S.WriteContent
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        />
        <S.WriteFooter>
          <S.WriteNum type="text" placeholder="0/100" readOnly />
          <S.CommentButton
            onClick={props.onClickComments}
            isActive={props.isActive}
          >
            등록버튼
          </S.CommentButton>
        </S.WriteFooter>
      </S.WrapperWriteComment>
      <S.Error>{props.contentsError}</S.Error>

      {/* 쓴 댓글 보여주는 곳 */}
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapperwrited key={el._id}>
          <S.ProfileIcon src="/commentBoard/profile-Icon.svg" />
          <S.WrapWriteComment>
            <S.WrapWritedHeader>
              <S.WrapFrontHeader>
                <S.CommentWriter>{el.writer}</S.CommentWriter>
                <S.star src="/commentBoard/star.svg" />
              </S.WrapFrontHeader>
              <S.WrapBackHeader>
                <S.Pencil src="/commentBoard/Pencil.svg" />
                <S.Delete
                  src="/commentBoard/X-Button.svg"
                  onClick={props.onClickDelete}
                  id={el._id}
                />
              </S.WrapBackHeader>
            </S.WrapWritedHeader>
            <S.Contents>{el.contents}</S.Contents>
            <S.Date>{getDate(el.createdAt)}</S.Date>
          </S.WrapWriteComment>
        </S.Wrapperwrited>
      ))}

      <S.Underline></S.Underline>
    </S.Wrapper>
  );
}
