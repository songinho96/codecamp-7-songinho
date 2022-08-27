import styled from "@emotion/styled";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { breakPoints } from "../../../../commons/styles/media";
import BoardCommentItem from "../edit/BoardCommentItem.container";
import { IBoardCommentListUIProps, Iel } from "./BoardCommentList.types";

const Wrapperwrited = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 1024px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    padding-bottom: 100px;
  }
`;

const Scroll = styled.div`
  width: 100%;
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

      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true || false}
        useWindow={true}
      >
        <Scroll>
          {props.data?.fetchBoardComments.map((el: Iel) => (
            <Wrapperwrited key={el._id}>
              <BoardCommentItem
                key={el._id}
                el={el}
                onClickDelete={props.onClickDelete}
              />
            </Wrapperwrited>
          ))}
        </Scroll>
      </InfiniteScroll>
    </Wrapper>
  );
}
