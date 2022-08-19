import styled from "@emotion/styled";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { breakPoints } from "../../../../commons/styles/media";
import BoardCommentItem from "../edit/BoardCommentItem.container";

const Wrapperwrited = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Scroll = styled.div`
  height: 800px;
  overflow: auto;
  margin: 0px auto;
  margin-bottom: 200px;
`;

export default function BoardCommentListUI(props) {
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
    </Wrapper>
  );
}
