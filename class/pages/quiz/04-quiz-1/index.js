import axios from "axios";

export default function Quiz() {
  const onClickRestApi = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickRestApi}>REST-API 요청하기</button>
    </div>
  );
}
