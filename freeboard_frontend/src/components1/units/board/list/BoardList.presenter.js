import * as S from "./BoardList.styles"

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.BestPost></S.BestPost>
        <S.WrapperBest>
          <S.WrapBest>
            <S.BestImage></S.BestImage>
            <S.BestTitle></S.BestTitle>
            <S.WrapBestInfo>
              <S.WrapperProfileInfo>
                <S.WrapProfile>
                  <S.ProfileIcon></S.ProfileIcon>
                  <S.ProfileWriter></S.ProfileWriter>
                </S.WrapProfile>
                <S.WrapDate>2022/11/11</S.WrapDate>
              </S.WrapperProfileInfo>
              <S.WrapperThumbs>
                <S.Thumbsup></S.Thumbsup>
                <S.TuumbsCount></S.TuumbsCount>
              </S.WrapperThumbs>
            </S.WrapBestInfo>
          </S.WrapBest>
        </S.WrapperBest>
      </S.Header>

    <S.WrapperTable>
      <S.TableRow>
        <div>checkbox</div>
        <div>제목</div>
        <div>작성자</div>
        <div>날짜</div>
      </S.TableRow> 
      {props.data?.fetchBoards.map((el) => (
      <S.Row ket={el._id}>
        <S.Column><input type="checkbox" /></S.Column>
        <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>{el.title}</S.ColumnTitle>
        <S.Column>{el.writer}</S.Column>
        <S.Column>{el.title}</S.Column>
        <S.Column>{el.contents}</S.Column>
      </S.Row>
      ))}
    </S.WrapperTable>

    <S.Footer>
      <S.Button onClick={props.onClickMoveToBoardNew}>게시물 등록</S.Button>
    </S.Footer>

    </S.Wrapper>
  )
}