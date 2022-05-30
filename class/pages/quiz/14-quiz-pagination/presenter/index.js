import * as S from "../styled/index";

export default function PaginationPresenter(props) {
  return (
    <div>
      {props.data?.fetchBoards.map((el) => (
        <div key={el._id}>
          {el.wrter} / {el.title}
        </div>
      ))}
      <S.WrapperPagination>
        <span onClick={props.onClickPrevPage}>이전페이지</span>

        {new Array(10).fill(1).map(
          (_, index) =>
            props.lastPage && (
              <S.Rowe key={index + props.startPage}>
                <S.Num
                  onClick={props.onClickPage}
                  id={String(index + props.startPage)}
                  clickPage={props.clickPage}
                >
                  {` ${index + props.startPage}`}
                </S.Num>
              </S.Rowe>
            )
        )}
        <span onClick={props.onClickNextPage}>다음페이지</span>
      </S.WrapperPagination>
    </div>
  );
}
