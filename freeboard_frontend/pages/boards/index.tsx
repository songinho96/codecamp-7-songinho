import BestBoardsContainer from "../../src/components/commons/BestBoards/basic/BestBoards.container";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import BoardList from "../../src/components/units/board/list/BoardList.container";

function BoardsPage(props) {
  return (
    <>
      <BestBoardsContainer />
      <BoardList />
    </>
  );
}
export default withAuth(BoardsPage);
