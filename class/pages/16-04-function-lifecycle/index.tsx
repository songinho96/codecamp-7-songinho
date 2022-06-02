import { Component, createRef, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

export default function CounterPage() {
  const router = useRouter();
  const [count, setCount] = useState(99);

  // componentDidMount() {
  //   console.log("마운트됨!!!");
  //   // 포커스 깜빡깜빡
  // }

  // componentDidUpdate() {
  //   console.log("수정되고 다시그려짐!!!");
  // }

  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!");
  //   // 채팅방 나가기
  //   // api 요청!!!
  // }

  useEffect(() => {
    console.log("마운트됨!!!");
    // 포커스 깜빡깜빡
  }, []); // 의존성 배열 count가 변경이 되면 다시 실행 됨 비어있으면 componentDidMount

  useEffect(() => {
    // 배열이 없다 conponentDidUpdate 이다.
    console.log("수정되고 다시그려짐!!!");
  });

  useEffect(() => {
    return () => {
      console.log("컴포넌트 사라짐!!!"); // ComponentWillUnmount
      // 채팅방 나가기
      // api 요청!!!
    };
  }, []);

  // 하나로 합치기 가능
  // useEffect(() => {
  //   console.log("마운트됨!!!");
  //   // 포커스 깜빡깜빡

  //   return () => {
  //     console.log("컴포넌트 사라짐!!!");  // ComponentWillUnmount
  //     // 채팅방 나가기
  //     // api 요청!!!
  //   }
  // }, []) // 의존성 배열 count가 변경이 되면 다시 실행 됨 비어있으면 componentDidMount

  // // 2. useEffect의 잘못된 사용 예제 : state를 주게 되면 시작하자 마자 두번 렌더링 된다.
  // // (1. 추가 렌더링, 2. 무한 루프)
  // useEffect(()=> {
  //   setCount(10)
  // }, [count])

  // useEffect(()=> {
  //   setCount(prev=>prev + 1)
  // }, [count])

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게");

  return (
    <div>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
