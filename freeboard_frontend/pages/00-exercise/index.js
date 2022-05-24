import { Button, Modal } from "antd";
import { useState } from "react";

export default function ModalSecond() {
  const [isModal, setIsModal] = useState(false);

  const countDown = () => {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "This is a notification message",
      content: `This modal will be destroyed after ${secondsToGo} second.`,
      visible: true,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  };
  return (
    <>
      <Button onClick={countDown}>Open modal to close in 5s</Button>
    </>
  );
}
