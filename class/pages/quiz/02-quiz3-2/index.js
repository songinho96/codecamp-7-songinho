import { useState } from "react";
export default function randomNumberPage() {
  const [ token, setToken] = useState("000000")

  function randomToken() {
    setToken(String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0"))
  }

  return (
    <div>
      <div>{token}</div>
      <button onClick={randomToken}>인증번호전송</button>
    </div>
  )

}