import styled from "@emotion/styled";

export const Rowe = styled.div`
  display: flex;
`;

export const Num = styled.div`
  display: flex;
  color: ${(props) => (props.clickPage === props.id ? "red" : "blue")};
`;

export const WrapperPagination = styled.div`
  display: flex;
`;
