import { useState } from "react";
let a = 0;

export default function StatePrev() {
  const [state, setState] = useState(0);

  function sumAll() {
    a++;
    setState((prev) => prev + a);
  }

  return (
    <div>
      <div>결과는: {state}</div>
      <button onClick={sumAll}>실행!</button>
    </div>
  );
}
