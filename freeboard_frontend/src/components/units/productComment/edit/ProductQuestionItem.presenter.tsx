import { getDateToday } from "../../../commons/libraries/utils";
import ProductAnswerListContainer from "../answer/list/ProductAnswerList.container";
import ProductAnswerContainer from "../answer/write/ProductAnswer.container";
import ProductQuestionWriteContainer from "../write/ProductQuestionWrite.container";
import * as S from "./ProductQuestionItem.styles";

export default function ProductQuestionItemPresenter(props) {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <S.Wrap>
          <S.WrapComment>
            <S.ProfileIcon src="/commentBoard/profile-Icon.svg" />
            <S.WrapWriteComment>
              <S.WrapWritedHeader>
                <S.WrapFrontHeader>
                  <S.CommentWriter>{props.el.user.name}</S.CommentWriter>
                  <S.Date>{getDateToday(props.el.createdAt)}</S.Date>
                </S.WrapFrontHeader>
                <S.WrapBackHeader>
                  <S.Answer
                    src="/images/answer.png"
                    onClick={props.onClickAnswerImg}
                    id={props.el._id}
                  ></S.Answer>
                  {props.myId && (
                    <>
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
                    </>
                  )}
                </S.WrapBackHeader>
              </S.WrapWritedHeader>
              <S.Contents>{props.el.contents}</S.Contents>
            </S.WrapWriteComment>
          </S.WrapComment>
          <ProductAnswerListContainer el={props.el} />
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

      {props.isAnswer === true && (
        <ProductAnswerContainer
          setIsAnswer={props.setIsAnswer}
          isAnswer={props.isAnswer}
          answerId={props.answerId}
          el={props.el}
          onClickAnswerImg={props.onClickAnswerImg}
        />
      )}
    </S.Wrapper>
  );
}
