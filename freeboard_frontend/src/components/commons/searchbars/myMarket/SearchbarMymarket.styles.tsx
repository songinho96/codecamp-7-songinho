import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding-top: 30px;
  width: 100%;
  display: flex;
`;

export const WrapMove = styled.div`
  display: flex;
  margin: 25px;
  align-items: center;
  justify-content: center;
`;

export const Myproduct = styled.div`
  margin-right: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: 700;
  border-bottom: 2px solid #fed602;
`;

export const Mypick = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: ${(props) => (props.soldclick ? 700 : 400)};
`;

export const WrapperSearch = styled.div``;

export const Searchbar = styled.input`
  width: 300px;
`;
