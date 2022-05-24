import { getDate } from "../../../commons/libraries/utils";
import * as S from "./BoardComment.styles";
import { Modal, Rate } from "antd";

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
        <S.Star>
          <Rate onChange={props.handleChange} value={props.value} />
        </S.Star>
      </S.WrapCommentWrite>

      <S.WrapperWriteComment>
        <S.WriteContent
          maxLength={100}
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        />
        <S.WriteFooter>
          <S.WriteNum>{props.contents.length}/100</S.WriteNum>
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
          <S.WrapperComment>
            <S.ProfileIcon src="/commentBoard/profile-Icon.svg" />
            <S.WrapWriteComment>
              <S.WrapWritedHeader>
                <S.WrapFrontHeader>
                  <S.CommentWriter>{el.writer}</S.CommentWriter>
                  <S.CommentStar>
                    <Rate value={el.rating} disabled />
                  </S.CommentStar>
                </S.WrapFrontHeader>
                <S.WrapBackHeader>
                  <S.Pencil src="/commentBoard/Pencil.svg" />
                  <S.Delete
                    src="/commentBoard/X-Button.svg"
                    id={el._id}
                    onClick={props.onClickDelete}
                  />

                  {props.isModalVisible && (
                    <Modal
                      visible={props.isModalVisible}
                      onOk={props.handleOk}
                      onCancel={props.handleCancel}
                    >
                      비밀번호 입력:
                      <input
                        type="password"
                        onChange={props.onChangeDeletePassword}
                      />
                    </Modal>
                  )}
                </S.WrapBackHeader>
              </S.WrapWritedHeader>
              <S.Contents>{el.contents}</S.Contents>
              <S.Date>{getDate(el.createdAt)}</S.Date>
            </S.WrapWriteComment>
          </S.WrapperComment>
          <S.Underline></S.Underline>
        </S.Wrapperwrited>
      ))}
    </S.Wrapper>
  );
}
