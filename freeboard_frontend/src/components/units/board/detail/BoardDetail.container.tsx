import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "../list/BoardList.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  FETCH_USER_LOGGED_IN,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();
  // console.log("aa", router);

  // 삭제mutation
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId }, // 일반적으로 똑같이 씀 boardId
  }); // 모두 한줄  FETCH_BOARD요청 data에 저장, 처음에 undefined => data
  // console.log(data?.fetchBoard.images);
  // console.log(data);

  const { data: UserData } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickMoveList = () => {
    router.push(`/boards`);
  };

  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARDS,
        },
      ],
    });
    Modal.success({
      title: "게시물 삭제 성공!!",
      content: "게시물이 삭제 되었습니다!",
    });
    router.push(`/boards`);
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDisLike = () => {
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  // 아이디
  const MyId = data?.fetchBoard.user?._id === UserData?.fetchUserLoggedIn._id;
  return (
    <BoardDetailUI
      data={data}
      onClickMoveList={onClickMoveList}
      onClickMoveEdit={onClickMoveEdit}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      MyId={MyId}
    />
  );
}
