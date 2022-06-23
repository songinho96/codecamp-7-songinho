import React, { useCallback, useState } from "react";
import MemoPresenter from "./presenter";

export default function index() {
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const onClickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
    console.log(countState);
  }, []);

  const onClickCountLet = useCallback(() => {
    countLet += 1;
    console.log(countLet);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state) +1 올리기
      </button>
      <div>카운트스테이트{countState}</div>
      <button onClick={onClickCountState}>스테이트카운트올리기</button>
      <div>카운트렛{countLet}</div>
      <button onClick={onClickCountLet}>렛카운트올리기</button>

      <MemoPresenter />
    </div>
  );
}
