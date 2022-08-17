import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../list/ProductQuestionList.queries";
import ProductAnswerEditPresenter from "./ProductAnswerEdit.presenter";

export default function ProductAnswerEditContainer(props) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [answerEditId, setAnswerEditId] = useState("");

  const { data: UserData } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickEdit = (event) => {
    setIsAnswerEdit((prev) => !prev);
    setAnswerEditId(event.target.id);
  };

  // 아이디 일치 확인
  const myId = props.el?.user._id.includes(UserData?.fetchUserLoggedIn._id);

  return (
    <div>
      <ProductAnswerEditPresenter
        refetch={props.refetch}
        onClickDelete={props.onClickDelete}
        key={props.el._id}
        el={props.el}
        onClickEdit={onClickEdit}
        isAnswerEdit={isAnswerEdit}
        answerEditId={answerEditId}
        setIsAnswerEdit={setIsAnswerEdit}
        setAnswerEditId={setAnswerEditId}
        answerData={props.answerData}
        myId={myId}
      />
    </div>
  );
}
