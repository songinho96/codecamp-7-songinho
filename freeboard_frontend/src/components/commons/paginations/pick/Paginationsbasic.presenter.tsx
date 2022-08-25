import * as S from "./Paginationsbasic.styles";
import { IPaginationbasicUIProps } from "./Paginationsbasic.types";

export default function PaginationbasicUI(props: IPaginationbasicUIProps) {
  return (
    <S.Wrapper>
      <S.Wrap>
        {props.pickCount?.fetchUseditemsCountIPicked > 100 && (
          <>
            <S.StartButton onClick={props.onClickStart}>＜＜</S.StartButton>
            <S.PrevButton onClick={props.onClickPrev}>＜</S.PrevButton>
          </>
        )}

        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.Pagination
                onClick={props.onClickPage}
                id={String(index + props.startPage)}
                key={index + props.startPage}
                isActive={index + props.startPage === props.activePage}
              >
                {` ${index + props.startPage} `}
              </S.Pagination>
            )
        )}
        {props.pickCount?.fetchUseditemsCountIPicked > 100 && (
          <>
            <S.NextButton onClick={props.onClickNext}>＞</S.NextButton>
            <S.LastButton onClick={props.onClickLast}>＞＞</S.LastButton>
          </>
        )}
      </S.Wrap>
    </S.Wrapper>
  );
}
