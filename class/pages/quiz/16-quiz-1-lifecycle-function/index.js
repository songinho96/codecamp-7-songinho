import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionLifeCycle() {
  const router = useRouter();
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Change!!");
  }, [isChange]);

  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  const onClickChange = () => {
    setIsChange((prev) => !prev);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}
