import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  height: 52px;
`;

export default function InputBasic(props) {
  return (
    <Input
      type={props.type}
      {...props.register}
      defaultValue={props.defaultValue}
    />
  );
}
