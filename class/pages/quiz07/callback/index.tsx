import styled from "@emotion/styled";
import axios from "axios";
import { result } from "lodash";
import React, { useState } from "react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div``;

export default function CallbackPage() {
  const [callBack, setCallBack] = useState([]);
  const [promise, setPromise] = useState([]);
  const [asyncAwait, setAsyncAwait] = useState([]);

  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aaa.send();
    aaa.addEventListener("load", (res: any) => {
      const num = res.target.response.split(" ")[0];
      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res: any) => {
        const userId = JSON.parse(res.target.response).UserId;
        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res: any) => {
          console.log(res);
          const result = JSON.parse(res.currentTarget.response);
          console.log(result);
          setCallBack(result);
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        const result = JSON.parse(res.request.response);
        console.log(result);
        setPromise(result);
      });
  };

  const onClickAsyncAwait = async () => {
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = aaa.data.split(" ")[0];
    const bbb = await axios.get(`http://koreanjson.com/posts/${num}`);
    const userId = bbb.data.UserId;
    const ccc = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);
    const result = JSON.parse(ccc.request.response);
    setAsyncAwait(result);
  };

  return (
    <div>
      결과:<button onClick={onClickCallback}>Callback</button>
      결과:<button onClick={onClickPromise}>Promise</button>
      결과:<button onClick={onClickAsyncAwait}>AsyncAwait</button>
      <div>onClickCallback</div>
      {callBack.map((el, index) => (
        <Row key={el._id}>
          <Column>{index + 1}</Column>
          <Column>{el._id}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      <div>onClickPromise</div>
      {promise.map((el, index) => (
        <Row key={el._id}>
          <Column>{index + 1}</Column>
          <Column>{el._id}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      <div>onClickAsyncAwait</div>
      {asyncAwait.map((el, index) => (
        <Row key={el._id}>
          <Column>{index + 1}</Column>
          <Column>{el._id}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
    </div>
  );
}
