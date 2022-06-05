import React from "react";
import { Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";

export default function Main() {
  return (
    <div>
      <Zoom>
        <img src="/images/dog.jpeg" />
      </Zoom>
      <Fade>
        <img src="/images/dog.jpeg" />
      </Fade>
      <Spin>
        <img src="/images/dog.jpeg " />
      </Spin>
    </div>
  );
}
