export default function HelloPage() {

  function change() {
    document.getElementById("changer").innerText = "반갑습니다."
  }

  return (
    <div>
      <button id="changer" onClick={change}>안녕하세요</button>
    </div>
  )

}