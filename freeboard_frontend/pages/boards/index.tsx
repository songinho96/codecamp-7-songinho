import BestBoardsContainer from "../../src/components/commons/BestBoards/basic/BestBoards.container";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import BoardList from "../../src/components/units/board/list/BoardList.container";

export default function BoardsPage() {
  useAuth();
  return (
    <>
      <BestBoardsContainer />
      <BoardList />
    </>
  );
}
