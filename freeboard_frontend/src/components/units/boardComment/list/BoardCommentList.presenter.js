// import { getDate } from "../../../commons/libraries/utils";
// import * as S from "./BoardCommentList.styles";
// import { Modal, Rate } from "antd";
import styled from "@emotion/styled";
import { Modal } from "antd";
import BoardCommentItemUI from "../edit/BoardCommentItem.presenter";
import InfiniteScroll from "react-infinite-scroller";

const Wrapperwrited = styled.div`
  width: 1200px;
  margin: 100px auto;
  box-sizing: border-box;
`;

const Scroll = styled.div`
  height: 867px;
  overflow: auto;
`;

export default function BoardCommentListUI(props) {
  return (
    <>
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
              <BoardCommentItemUI
                el={el}
                setEventId={props.setEventId}
                eventId={props.eventId}
                onClickDelete={props.onClickDelete}
              />
            </Wrapperwrited>
          ))}
        </InfiniteScroll>
      </Scroll>
    </>
    // <S.Wrapper>
    //   {/* 쓴 댓글 보여주는 곳 */}
    //   {props.data?.fetchBoardComments.map((el) => (
    //     <S.Wrapperwrited key={el._id}>
    //       <S.WrapperComment>
    //         <S.ProfileIcon src="/commentBoard/profile-Icon.svg" />
    //         <S.WrapWriteComment>
    //           <S.WrapWritedHeader>
    //             <S.WrapFrontHeader>
    //               <S.CommentWriter>{el.writer}</S.CommentWriter>
    //               <S.CommentStar>
    //                 <Rate value={el.rating} disabled />
    //               </S.CommentStar>
    //             </S.WrapFrontHeader>
    //             <S.WrapBackHeader>
    //               <S.Pencil src="/commentBoard/Pencil.svg" />
    //               <S.Delete
    //                 src="/commentBoard/X-Button.svg"
    //                 id={el._id}
    //                 onClick={props.onClickDelete}
    //               />

    //               {props.isModalVisible && (
    //                 <Modal
    //                   visible={props.isModalVisible}
    //                   onOk={props.handleOk}
    //                   onCancel={props.handleCancel}
    //                 >
    //                   비밀번호 입력:
    //                   <input
    //                     type="password"
    //                     onChange={props.onChangeDeletePassword}
    //                   />
    //                 </Modal>
    //               )}
    //             </S.WrapBackHeader>
    //           </S.WrapWritedHeader>
    //           <S.Contents>{el.contents}</S.Contents>
    //           <S.Date>{getDate(el.createdAt)}</S.Date>
    //         </S.WrapWriteComment>
    //       </S.WrapperComment>
    //       <S.Underline></S.Underline>
    //     </S.Wrapperwrited>
    //   ))}
    // </S.Wrapper>
  );
}
