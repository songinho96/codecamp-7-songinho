import styled from "@emotion/styled";

export const WrapperSearch = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 40px;
`;

export const InputSearch = styled.input`
  margin-right: 42px;
  width: 776px;
  height: 52px;
  background-color: #f4f2fc;
  padding: 8px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const DateSearch = styled.input`
  margin-right: 44px;
  width: 244px;
  height: 52px;
  color: #bdbdbd;
  text-align: center;
`;

export const ButtonSearch = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  color: white;
  border-radius: 10px;
`;
