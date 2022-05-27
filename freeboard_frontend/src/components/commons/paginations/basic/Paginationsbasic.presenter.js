import * as S from "./Paginationsbasic.styles";

export default function PaginationbasicUI(props) {
  return (
    <S.Wrapper>
      <S.PrevButtin onClick={props.onClickPrev}>이전</S.PrevButtin>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Pagination
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
              key={index + props.startPage}
            >
              {` ${index + props.startPage} `}
            </S.Pagination>
          )
      )}
      <S.NextButton onClick={props.onClickNext}>다음</S.NextButton>
    </S.Wrapper>
  );
}
