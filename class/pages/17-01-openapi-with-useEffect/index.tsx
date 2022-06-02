import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    // async 를 useEddect에 쓰지 못해서 함수를 하나 더 만들어 준다.
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  return (
    <div>
      <h1>오픈API 연습!!!</h1>
      <img src={dogUrl} />
    </div>
  );
}
