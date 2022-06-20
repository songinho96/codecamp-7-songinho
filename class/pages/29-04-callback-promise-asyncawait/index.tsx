// `http://numbersapi.com/random?min=1&max=200``http://koreanjson.com/posts/${num}``http://koreanjson.com/posts?userId=${userId}`;

import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0]; // 150 ( 랜덤 숫자 )

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          console.log(res); // 최종 결과갑!!!
        });
      });
    });
  }; // 콜백 지옥

  const myaxios = () => {
    return new Promise((resolve, reject) => {
      // 오래걸리는 작업(외부 API 요청 등)

      // 성공시
      resolve("철수");

      // 실패시
      // reject("에러발생!!!");
    });
  };

  const onClickPromise = () => {
    // const result = myaxios().then((res) => {
    //   console.log(res)
    // })

    // axios.get(`http://numbersapi.com/random?min=1&max=200`).then((res) => {
    //   const num = res.data.split(" ")[0];
    //   return axios.get(`http://koreanjson.com/posts/${num}`).then((res) => {
    //     const userId = res.data.UserId;
    //     axios
    //       .get(`http://koreanjson.com/posts?userId=${userId}`)
    //       .then((res) => {
    //         console.log(res); // 최종 결과값!!!
    //       });
    //   });
    // });   콜백이랑 다른게 없다.

    console.log("여기는 1번 입니다!!!");
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        console.log("여기는 2번 입니다!!!"); // 3번
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는 3번 입니다!!!"); // 4번
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번 입니다!!!"); // 5번
        // console.log("최종 결과값!!");
      });
    console.log("여기는 5번 입니다!!!"); // 2번
  };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");

    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기!!</button>
      <button onClick={onClickPromise}>Promise 요청하기!!</button>
      <button onClick={onClickAsyncAwait}>AsyncAwait 요청하기!!</button>
    </div>
  );
}
