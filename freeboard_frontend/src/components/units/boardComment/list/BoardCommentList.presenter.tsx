import styled from "@emotion/styled";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from "../edit/BoardCommentItem.container";
import { IBoardCommentListUIProps, Iel } from "./BoardCommentList.types";

const Wrapperwrited = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 100px;
`;

const Scroll = styled.div`
  height: 700px;
  overflow: auto;
  margin: 0px auto;
`;

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <Wrapper>
      {props.isModalVisible && (
        <Modal
          visible={props.isModalVisible}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          비밀번호 입력:
          <input type="password" onChange={props.onChangeDeletePassword} />
        </Modal>
      )}

      <Scroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true || false}
          useWindow={false}
        >
          {props.data?.fetchBoardComments.map((el: Iel) => (
            <Wrapperwrited key={el._id}>
              <BoardCommentItem
                key={el._id}
                el={el}
                onClickDelete={props.onClickDelete}
              />
            </Wrapperwrited>
          ))}
        </InfiniteScroll>
      </Scroll>
    </Wrapper>
  );
}
