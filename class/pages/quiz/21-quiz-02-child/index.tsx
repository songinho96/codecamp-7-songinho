import { useState } from "react";

// presenter 부분
export default function Presenter(props: any) {
  // 3번
  // ["철수", "영희", "훈이", "맹구"].map((_, index) => {
  //   console.log(`영희는 ${index}번째 칸에 들어있습니다.`);
  // });

  const [state, setState] = useState(0);

  function counter() {
    setState((qwer) => qwer + 1);
    console.log(state);
  }

  return (
    <>
      {/* 1번
     <div>{props.child}</div>; */}

      {/* 2번
      {props.child}는 {props.age}살 입니다. */}

      <div>{state}</div>
      <button onClick={counter}>카운트 올리기!!</button>
    </>
  );
}
