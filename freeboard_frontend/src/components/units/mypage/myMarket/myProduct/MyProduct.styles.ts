import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  border-bottom: 2px solid gray;
  margin: auto 0;
`;

export const Count = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin: 15px 0;
`;

export const WrapperList = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const WrapProductList = styled.div`
  width: 194px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 194px;
  height: 194px;
  border: 1px solid #d1d1d6;
`;

export const WrapProductDetail = styled.div`
  width: 194px;
  height: 80px;
  border: 1px solid #d1d1d6;
  border-top: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-size: 16px;
`;

export const WrapDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-weight: 100;
  font-size: 0.9rem;
`;

export const ProductDate = styled.div`
  font-size: 0.7rem;
`;

// export const TableRow = styled.div`
//   margin-top: 30px;
//   display: flex;
//   flex-direction: row;
//   padding: 10px 0;

//   border-top: 2px solid gray;
// `;

// export const WrapProduct = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   border-top: 1px solid gray;
//   padding-top: 10px;
// `;

// export const Index = styled.div`
//   width: 10%;
//   padding-left: 10px;
//   text-align: center;
// `;

// export const Name = styled.div`
//   width: 20%;
//   text-align: center;
// `;

// export const NameMove = styled.div`
//   width: 20%;
//   cursor: pointer;
//   :hover {
//     color: red;
//   }
//   text-align: center;
// `;

// export const IsBuyer = styled.div`
//   width: 20%;
//   color: red;
//   /* text-align: start; */
// `;

// export const Price = styled.div`
//   width: 30%;
//   /* text-align: start; */
// `;

// export const Date = styled.div`
//   width: 20%;
//   text-align: center;
// `;
