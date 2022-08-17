import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../list/ProductQuestionList.queries";
import ProductQuestionItemPresenter from "./ProductQuestionItem.presenter";

export default function ProductQuestionItemContainer(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const [isAnswer, setIsAnswer] = useState(false);
  const [answerId, setAnswerId] = useState("");

  const { data: UserData } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickAnswerImg = (event) => {
    setIsAnswer((prev) => !prev);
    setAnswerId(event.target.id);
  };

  const onClickEdit = (event) => {
    setIsEdit((prev) => !prev);
    setEditId(event.target.id);
  };

  const myId = props.el?.user._id.includes(UserData?.fetchUserLoggedIn._id);
  console.log(myId);
  console.log(props.el?.user._id);
  return (
    <ProductQuestionItemPresenter
      setIsEdit={setIsEdit}
      onClickEdit={onClickEdit}
      el={props.el}
      onClickDelete={props.onClickDelete}
      isEdit={isEdit}
      editId={editId}
      setEditId={setEditId}
      // Answer
      onClickAnswerImg={onClickAnswerImg}
      isAnswer={isAnswer}
      answerId={answerId}
      setIsAnswer={setIsAnswer}
      // 질문자
      myId={myId}
    />
  );
}
