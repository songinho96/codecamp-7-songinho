export default function randomNumberPage() {

  const token = () => {
    let token =  String( Math.floor( Math.random() * 1000000 ) ).padStart(6,"0");
    document.getElementById("auth").innerText = token;
  }

  return (
    <div>
    <div id="auth">000000</div>
    <button onClick={token}>인증번호전송</button>
    </div>

  )


}