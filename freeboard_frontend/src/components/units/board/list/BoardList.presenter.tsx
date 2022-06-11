import * as S from "./BoardList.styles";
import { getDate } from "../../../commons/libraries/utils";
import Paginationbasic from "../../../commons/paginations/basic/Paginationsbasic.container";
import { v4 as uuidv4 } from "uuid";
import SearchbarBasicContainer from "../../../commons/searchbars/basic/SearchbarBasic.container";

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <S.Body>
        {/* 게시물 검색 컴포넌트 */}
        <SearchbarBasicContainer
          keyword={props.keyword}
          refetch={props.refetch}
          setKeyword={props.setKeyword}
          refetchCount={props.refetchCount}
        />

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
      <Paginationbasic refetch={props.refetch} dataCount={props.dataCount} />
      <S.Footer>
        <S.Button onClick={props.onClickMoveBoardNew}>게시물 등록</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
