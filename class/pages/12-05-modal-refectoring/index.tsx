// 12-03 COPY

import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev); // 기존값이 false다
  };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
    // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <div>
      <Button onClick={onToggleModal}>Open Modal</Button>

      {/* 모달 삭제하고 새로 만드는 방법 */}
      {isModalVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}

      {/* 모달 숨겼다가 나타나게 하는 방법
        <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )} 
      */}
    </div>
  );
}
