import * as S from "./BoardList.styles";
import { getDate } from "../../../commons/libraries/utils";
export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.BestPost>베스트 게시글</S.BestPost>
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
      <S.Body>
        <S.WrapperTable>
          <S.TableRow>
            <S.Column>번호</S.Column>
            <S.Column>제목</S.Column>
            <S.Column>작성자</S.Column>
            <S.Column>날짜</S.Column>
          </S.TableRow>

          {props.data?.fetchBoards.map((el, index) => (
            <S.Row key={el._id}>
              <S.Column>{index + 1}</S.Column>
              <S.Column id={el._id} onClick={props.onClickMoveBoardDetail}>
                {el.title}
              </S.Column>
              <S.Column>{el.writer}</S.Column>
              <S.Column>{getDate(el.createdAt)}</S.Column>
            </S.Row>
          ))}
        </S.WrapperTable>
      </S.Body>

      <S.Footer>
        <S.Button onClick={props.onClickMoveBoardNew}>게시물 등록</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
