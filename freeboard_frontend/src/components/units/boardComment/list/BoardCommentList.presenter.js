import styled from "@emotion/styled";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentItem from "../edit/BoardCommentItem.container";

const Wrapperwrited = styled.div`
  width: 1200px;
  margin: 100px auto;
  box-sizing: border-box;
`;

const Scroll = styled.div`
  height: 867px;
  overflow: auto;
  width: 1240px;
  display: flex;
  margin: 0px auto;
  margin-bottom: 200px;
`;

export default function BoardCommentListUI(props) {
  return (
    <div>
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
          {props.data?.fetchBoardComments.map((el) => (
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
    </div>
  );
}
