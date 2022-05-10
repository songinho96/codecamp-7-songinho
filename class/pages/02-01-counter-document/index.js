export default function CounterDocumentPage() {
  // 자바스크립트 영역 (여기서 작성한 것을 {}에 이용 가능하다.)
  function counter() {
    const result = Number(document.getElementById("count").innerText) + 1
    document.getElementById("count").innerText = result
  }

  return (
    <div>
      <div id="count">0</div>
      <button onClick={counter}>카운트 올리기!!</button>
    </div>
  )
}