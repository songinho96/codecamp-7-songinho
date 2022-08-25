import styled from "@emotion/styled";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export default function DetailPage() {
  return (
    <Wrapper>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </Wrapper>
  );
}
