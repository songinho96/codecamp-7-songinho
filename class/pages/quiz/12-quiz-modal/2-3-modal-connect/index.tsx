import React, { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalAlert() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [location, setLocation] = useState("");

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    setIsModalVisible(false);
    setLocation(data.address);
  };

  return (
    <div>
      <Button type="primary" onClick={onToggleModal}>
        Open Modal
      </Button>
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      <div>{location}</div>
    </div>
  );
}
