import { DownCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(DownCircleOutlined)`
  color: red;
  font-size: 50px; // 사이즈를 font-size로 키움
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
