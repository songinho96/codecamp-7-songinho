import styled from '@emotion/styled'

interface IWriterInputProps {
  backgroundColor: string
}

export const WriterInput = styled.input`
  background-color: ${(props: IWriterInputProps) =>props.backgroundColor}
`