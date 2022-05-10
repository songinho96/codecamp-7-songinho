import { useState } from "react"

export default function change() {
  const [helloChange, setHelloChange] = useState("안녕하세요")

  function change() {
    setHelloChange("반갑습니다.")
  }

return (
  <div>
      <button onClick={change}>{helloChange}</button>
    </div>
)

}