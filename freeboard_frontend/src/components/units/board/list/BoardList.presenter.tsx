import * as S from "./BoardList.styles";
import { getDate } from "../../../commons/libraries/utils";
import Paginationbasic from "../../../commons/paginations/basic/Paginationsbasic.container";
import { v4 as uuidv4 } from "uuid";

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
        <S.WrapperSearch>
          <S.InputSearch
            onChange={props.onChangeSearch}
            type="text"
            placeholder="제목을 입력해주세요."
          />
          <S.DateSearch type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
          <S.ButtonSearch>검색하기</S.ButtonSearch>
        </S.WrapperSearch>
        <S.Underline></S.Underline>
        <S.WrapperTable>
          <S.TableRow>
            <S.NumColumn>번호</S.NumColumn>
            <S.TitleColumntitle>제목</S.TitleColumntitle>
            <S.WriterColumn>작성자</S.WriterColumn>
            <S.DateColumn>날짜</S.DateColumn>
          </S.TableRow>
          {props.data?.fetchBoards.map((el, index) => (
            <S.Row key={el._id}>
              <S.NumColumn>{index + 1}</S.NumColumn>
              <S.TitleColumn id={el._id} onClick={props.onClickMoveBoardDetail}>
                {/* {el.title} */}
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
              </S.TitleColumn>
              <S.WriterColumn>{el.writer}</S.WriterColumn>
              <S.DateColumn>{getDate(el.createdAt)}</S.DateColumn>
            </S.Row>
          ))}
        </S.WrapperTable>
        <S.Underline></S.Underline>
      </S.Body>
      <Paginationbasic refetch={props.refetch} />
      <S.Footer>
        <S.Button onClick={props.onClickMoveBoardNew}>게시물 등록</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
