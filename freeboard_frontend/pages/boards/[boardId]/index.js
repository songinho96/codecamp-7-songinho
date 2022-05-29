import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
// import BoardList from "../../../src/components/units/board/list/BoardList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";

export default function DetailPage() {
  return (
    <>
      <BoardDetail />
      {/* <BoardList /> */}
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
