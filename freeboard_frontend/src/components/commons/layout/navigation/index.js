import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 100px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
`;

const GoBoard = styled.div`
  padding-left: 80px;
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

export default function LayoutNavigation() {
  return (
    <Wrapper>
      <List>
        <GoBoard>게시판 등록</GoBoard>
        <GoBoard>게시판 목록</GoBoard>
        <GoBoard>마이 페이지</GoBoard>
      </List>
    </Wrapper>
  );
}
