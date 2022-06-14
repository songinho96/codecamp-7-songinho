import { useRouter } from "next/router";

export default function HofPage() {
  const router = useRouter();
  const onClickMove = (boardId) => () => {
    router.push(`/${boardId}`);
  };

  function onClickMove(boardId) {
    return function asdlsdf(event) {
      console.log(boardId);
      console.log(event);
    };
  }

  onClickMove(event);

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {[
        {
          id: "111",
          title: "안녕하세요",
          writer: "철수",
          contents: "반갑습니다.",
        },
        {
          id: "222",
          title: "영희입니다~",
          writer: "영희",
          contents: "날씨가 어때요?.",
        },
        {
          id: "333",
          title: "훈이에여",
          writer: "훈이",
          contents: "날씨 좋네요!",
        },
      ].map((el) => (
        <div key={el.id} onClick={onClickMove(el.id)}>
          {el.title} {el.writer}
        </div>
      ))}
    </div>
  );
}
