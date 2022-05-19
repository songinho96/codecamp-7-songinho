import styled from '@emotion/styled'

export const WriterInput = styled.input`

`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.isActive === true ? "yellow" : "default"};
`