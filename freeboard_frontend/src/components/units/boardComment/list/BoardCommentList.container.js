import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

import { Modal } from "antd";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentList() {
  // Antd
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  const [eventId, setEventId] = useState("");

  // useState

  const [value, setValue] = useState(3);

  // Mutation
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  const onChangeDeletePassword = (event) => {
    setDeletePassword(event.target.value);
  };

  // StarRating
  const handleChange = async (value) => {
    setValue(value);
  };

  const onClickDelete = (event) => {
    setIsModalVisible(true);
    setEventId(event.target.id);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    const mypassword = deletePassword;
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: eventId,
          password: mypassword,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        title: "댓글 삭제 성공!!",
        content: "댓글이 삭제 되었습니다!",
      });
    } catch (error) {
      Modal.error({
        title: "Error 메시지",
        content: "비밀번호가 틀렸습니다!",
      });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Antd

  // 무한 스크롤
  const loadFunc = () => {
    if (!data) return;
    fetchMore({
      // 더 받아옴
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 }, // 한 페이지당 10개 다음페이지 까지 불러 와야 하기 때문에 + 1 해준다.
      // fetchMoreResult = 11~20  prev는 1~10
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments, // 기존꺼 10개
            ...fetchMoreResult.fetchBoardComments, // 다음꺼 10개
          ],
        };
      },
    });
  };

  return (
    <p>
      <BoardCommentListUI
        onClickDelete={onClickDelete}
        data={data}
        handleChange={handleChange}
        value={value}
        // Modal
        Modal={Modal}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        onChangeDeletePassword={onChangeDeletePassword}
        loadFunc={loadFunc}
      />
    </p>
  );
}
