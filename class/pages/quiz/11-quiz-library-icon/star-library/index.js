import { Rate } from "antd";
import { useState } from "react";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function StarRating() {
  const [value, setValue] = useState(3);

  const onChangeStar = (event) => {
    setValue(event);
    alert(`${event}점`);
    console.log(event);
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={onChangeStar} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
}
