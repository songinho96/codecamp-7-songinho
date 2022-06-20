import React from "react";
import * as S from "./myPick.styles";

export default function MyPickPresenter(props) {
  return (
    <S.Wrapper>
      <S.Body>
        <S.WrapperTable>
          <S.TableRow>
            <S.NumColumn>번호</S.NumColumn>
            <S.NameColumntitle>상품명</S.NameColumntitle>
            <S.PriceColumn>판매가격</S.PriceColumn>
            <S.SellerColumn>판매자</S.SellerColumn>
            <S.DateColumn>날짜</S.DateColumn>
          </S.TableRow>
          {props.data?.fetchUseditemsIPicked.map((el, index) => (
            <S.Row key={el._id}>
              <S.NumColumn>{index + 1}</S.NumColumn>
              {/* <S.NameColumn id={el._id} onClick={props.onClickMoveBoardDetail}>
                {el.title}
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((keywordel: any) => (
                    <S.Word
                      id={el._id}
                      key={uuidv4()}
                      isMatched={props.keyword === keywordel}
                    >
                      {keywordel}
                    </S.Word>
                  ))}
              </S.NameColumn> */}
              <S.PriceColumn>{el.price}</S.PriceColumn>
              {/* <S.DateColumn>{getDate(el.createdAt)}</S.DateColumn> */}
            </S.Row>
          ))}
        </S.WrapperTable>
      </S.Body>
    </S.Wrapper>
  );
}
