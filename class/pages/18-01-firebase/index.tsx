import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  const [inputId, setInputId] = useState("");

  const onClickSubmit = async () => {
    // firebase에 데이터 한줄 등록하기
    const board = collection(getFirestore(firebaseApp), "board"); // board컬렉션
    await addDoc(board, {
      // addDoc 문서를 추가 해주세요.
      writer: inputId,
      title: "제목입니다",
      contents: "내용이에요!!",
    });
  };

  const onClickFetch = async () => {
    // firebase에서 데이터 꺼내오기
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board); // getDocs 문서를 가지고 와주세요. await
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  const onChangeId = (event) => {
    setInputId(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChangeId} />
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
      {result.docs.map((el) => (
        <div>{el.writer}</div>
      ))}
      
    </div>
  );
}
