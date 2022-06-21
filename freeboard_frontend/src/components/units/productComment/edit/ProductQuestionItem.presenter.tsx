import { getDateList } from "../../../commons/libraries/utils";
import ProductQuestionWriteContainer from "../write/ProductQuestionWrite.container";
import * as S from "./ProductQuestionItem.styles";

export default function ProductQuestionItemPresenter(props) {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <S.Wrap>
          <S.ProfileIcon src="/commentBoard/profile-Icon.svg" />
          <S.WrapWriteComment>
            <S.WrapWritedHeader>
              <S.WrapFrontHeader>
                <S.CommentWriter>{props.el.user.name}</S.CommentWriter>
              </S.WrapFrontHeader>
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
            </S.WrapWritedHeader>
            <S.Contents>{props.el.contents}</S.Contents>
            <S.Date>{getDateList(props.el.createdAt)}</S.Date>
          </S.WrapWriteComment>
        </S.Wrap>
      )}

      {props.isEdit === true && (
        <ProductQuestionWriteContainer
          isEdit={props.isEdit}
          editId={props.editId}
          setIsEdit={props.setIsEdit}
          el={props.el}
        />
      )}
    </S.Wrapper>
  );
}
