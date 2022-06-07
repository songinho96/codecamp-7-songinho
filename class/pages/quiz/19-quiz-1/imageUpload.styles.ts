import styled from "@emotion/styled";
import { LikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 400px;
  margin-bottom: 20px;
`;

export const Image = styled.input`
  display: none;
`;

export const CallButton = styled.button`
  width: 400px;
`;

export const SeeImage = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid black;
`;

export const WrapFile = styled.div`
  display: flex;
`;

export const LikeButton = styled(LikeOutlined)`
  font-size: 300px;
`;
