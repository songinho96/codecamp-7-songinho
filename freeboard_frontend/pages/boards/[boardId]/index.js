import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
// import BoardList from "../../../src/components/units/board/list/BoardList.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function DetailPage() {
  return (
    <div>
      <BoardDetail />
      {/* <BoardList /> */}
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  );
}
