import { Rate } from "antd";
import { useState } from "react";
import { getDate } from "../../../commons/libraries/utils";
import BoardCommentWrite from "../BoardCommentWrite.container";
import * as S from "./BoardCommentItem.styles";

export default function BoardCommentItemUI(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (event) => {
    setIsEdit(true);
    props.setEventId(event.target.id);
  };

  return (
    <S.Wrapper>
      {/* 쓴 댓글 보여주는 곳 */}
      {isEdit === false && (
        <S.WrapperComment>
          <S.ProfileIcon src="/commentBoard/profile-Icon.svg" />
          <S.WrapWriteComment>
            <S.WrapWritedHeader>
              <S.WrapFrontHeader>
                <S.CommentWriter>{props.el.writer}</S.CommentWriter>
                <S.CommentStar>
                  <Rate value={props.el.rating} disabled />
                </S.CommentStar>
              </S.WrapFrontHeader>
              <S.WrapBackHeader>
                <S.Pencil
                  src="/commentBoard/Pencil.svg"
                  onClick={onClickEdit}
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
            <S.Date>{getDate(props.el.createdAt)}</S.Date>
          </S.WrapWriteComment>
        </S.WrapperComment>
      )}
      {isEdit === true && (
        <BoardCommentWrite
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          eventId={props.eventId}
        />
      )}
      <S.Underline></S.Underline>
    </S.Wrapper>
  );
}
