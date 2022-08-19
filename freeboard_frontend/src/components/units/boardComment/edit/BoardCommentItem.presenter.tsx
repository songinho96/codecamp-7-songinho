import { Rate } from "antd";
import { getDateList } from "../../../commons/libraries/utils";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

import * as S from "./BoardCommentItem.styles";

export default function BoardCommentItemUI(props) {
  return (
    <S.Wrapper>
      {/* 쓴 댓글 보여주는 곳 */}
      {props.isEdit === false && (
        <S.WrapperComment>
          <S.WrapStart>
            <S.ProfileIcon src="/commentBoard/profile-Icon.svg" />
            <S.WrapWriteComment>
              <S.WrapWritedHeader>
                <S.WrapFrontHeader>
                  <S.CommentWriter>{props.el.writer}</S.CommentWriter>
                  <S.CommentStar>
                    <Rate value={props.el.rating} disabled />
                  </S.CommentStar>
                </S.WrapFrontHeader>
              </S.WrapWritedHeader>

              <S.Contents>{props.el.contents}</S.Contents>

              <S.Date>{getDateList(props.el.createdAt)}</S.Date>
            </S.WrapWriteComment>
          </S.WrapStart>
          <S.WrapBackHeader>
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
        </S.WrapperComment>
      )}

      {props.isEdit === true && (
        <BoardCommentWrite
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
          editId={props.editId}
          el={props.el}
        />
      )}
      <S.Underline></S.Underline>
    </S.Wrapper>
  );
}
