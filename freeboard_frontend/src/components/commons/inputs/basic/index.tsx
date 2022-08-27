import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid gray;
`;

const Wrapper = styled.div`
  width: 100%;
`;

export default function InputBasic(props: any) {
  return (
    <Wrapper>
      <Input
        type={props.type}
        {...props.register}
        defaultValue={props.defaultValue}
      />
    </Wrapper>
  );
}
