import React from "react";

export default function InputQuiz(props) {
  return <input type={props.type} {...props.register} />;
}
