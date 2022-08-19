import { EnvironmentFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 70%;
  border-bottom: 2px solid gray;
  margin: 0 auto;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
  justify-content: space-between;
`;

export const Count = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin: 15px 0;
`;

export const WrapperSearch = styled.div`
  width: 190px;
  height: 30px;
  background: white;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  cursor: pointer;
  border: 1px solid #d1d1d6;
  align-items: center;
  justify-content: space-between;
`;

export const SearchIcon = styled.img``;

export const Searchbar = styled.input`
  width: 180px;
  height: 25px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const WrapperList = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  @media ${breakPoints.mobile} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const WrapProductList = styled.div`
  width: 194px;
  margin-bottom: 15px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 180px;
  }
`;

export const WrapProductImage = styled.div`
  width: 100%;
  height: 194px;
`;

export const ProductSold = styled.div`
  position: absolute;
  width: 194px;
  height: 194px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  z-index: 10;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 194px;
  border: 1px solid #d1d1d6;
  filter: ${(props) => props.soldAt && "brightness(45%)"};
  background: ${(props) => props.soldAt && "rgba(0, 0, 0, 0.55)"};
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

  @media ${breakPoints.mobile} {
    width: 180px;
  }
`;

export const ProductName = styled.div`
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const WrapDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const ProductDate = styled.div`
  font-size: 0.7rem;
`;

export const WrapAddress = styled.div`
  width: 194px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #d1d1d6;
  border-top: none;
  padding: 10px;
  flex-wrap: nowrap;

  @media ${breakPoints.mobile} {
    width: 180px;
  }
`;

export const ProductAddressIcon = styled(EnvironmentFilled)`
  color: #a8a8a8;
  font-size: 0.9rem;
`;

export const ProductAddress = styled.div`
  color: #a8a8a8;
  font-size: 0.9rem;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
