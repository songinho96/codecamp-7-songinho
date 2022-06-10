import React from "react";

export default function HofPage() {
  // 쉽게보자면 onClick 에는 ()가 숨어있다.
  // 그래서 ()를 안해줘도 그안에 event를 받을 수 있는 함수가 포함되어 있어
  // ()를 하나만 해줘도 다음 함수가 실행이 된다.
  const onClickButton = (aaa) => () => {
    console.log(aaa);
  };
  return (
    <>
      <button onClick={onClickButton(123)}>버튼클릭</button>
    </>
  );
}
