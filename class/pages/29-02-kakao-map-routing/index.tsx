import Link from "next/link";
// import { useRouter } from "next/router";

export default function KakaoMapPage() {
  // const router = useRouter();
  // const onClickMoveToMap = () => {
  //   router.push("/29-03-kakao-map-routed");
  // };

  return (
    // <button onClick={onClickMoveToMap}>맵으로 이동하기</button>
    <Link href="/29-03-kakao-map-routed">
      {/* a 태그는 그냥 넣어준 것 기능은 없음 이렇게 해야 보여지는 html 태그에 a 태그 라는 영역이 만들어짐 */}
      <a>맵으로 이동하기!!</a>
    </Link> // router.push 랑 같음
    // <button>
    // <a href="/29-03-kakao-map-routed">맵으로 이동하기!</a>
    // </button>
  );
}
