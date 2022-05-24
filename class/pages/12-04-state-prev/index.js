// 02-02-counter-state COPY
// import { useState } from "react" // useState 기능을 'react'에서 가져오기

import { useState } from "react";

export default function CountStatePage() {
  const [count, setCount] = useState(0);

  const counter = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div> {count} </div>
      <button onClick={counter}>카운트 올리기!!</button>
    </div>
  );
}
