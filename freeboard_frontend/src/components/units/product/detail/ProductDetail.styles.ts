import styled from "@emotion/styled";
import { Image } from "antd";

export const Wrapper = styled.div`
  width: 1024px;
  margin: auto;
  padding: 100px 0;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
`;

// export const Image = styled.img`
//   width: 480px;
//   height: 480px;
//   border: 1px solid gray;
//   margin-right: 75px;
// `;

export const AntImage = styled(Image)`
  width: 480px;
  height: 480px;
`;

export const WrapDetail = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const WrapIcon = styled.div`
  display: flex;
`;

export const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 15px;
`;

export const Price = styled.div`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Underline = styled.div`
  width: 100%;
  border-top: 4px solid black;
  padding-bottom: 20px;
`;

export const Contents = styled.div`
  width: 800px;

  padding-bottom: 30px;
`;

export const WrapTags = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom: 30px;
`;

export const Tags = styled.div`
  margin-right: 10px;
`;

export const WrapButton = styled.div`
  display: flex;
  padding-top: 40px;
`;

export const Pickbutton = styled.button`
  width: 177px;
  height: 54px;
  margin-right: 22px;
  font-size: 30px;
  font-weight: 700;
  color: white;
  background-color: red;
  border: none;
`;

export const BasketButton = styled.button`
  width: 177px;
  height: 54px;
  margin-right: 22px;
  font-size: 30px;
  font-weight: 700;
  border: none;
`;

export const BuyButton = styled.button`
  width: 177px;
  height: 54px;
  font-size: 30px;
  font-weight: 700;
  border: none;
`;

export const Body = styled.div`
  display: flex;
  padding-top: 70px;
`;

// export const Wrapper = styled.div`
//   width: 80%;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
// `;

// export const WrapImage = styled.div`
//   display: flex;
// `;

// export const DetailImage = styled.div`
//   border: 1px solid gray;

//   /* width: 300px; */
// `;

// export const WrapEditDelete = styled.div`
//   display: flex;
//   background-color: gray;
// `;

// export const ProductName = styled.div`
//   font-size: 30px;
//   font-weight: bold;
//   padding-bottom: 20px;
// `;

// export const ProductPrice = styled.div`
//   font-size: 25px;
// `;

export const ProductContents = styled.div`
  width: 996px;
  font-size: 17px;
  padding-left: 130px;
  padding-bottom: 10px;
`;

// export const ProductTag = styled.div`
//   padding-bottom: 200px;
// `;

// export const ListButton = styled.button`
//   width: 180px;
//   height: 50px;
//   margin: 0 50px;
// `;

// export const BuyButton = styled.button`
//   width: 180px;
//   height: 50px;
// `;

// export const BasketButton = styled.button`
//   width: 180px;
//   height: 50px;
//   background-color: ${(props) => (props.isBaskets ? "yellow" : "gray")};
//   color: ${(props) => (props.isBaskets ? "black" : "white")};
// `;

// export const PickButton = styled.button`
//   width: 180px;
//   height: 50px;
//   background-color: ${(props) => (props.myPick === 1 ? "yellow" : "gray")};
//   color: ${(props) => (props.myPick === 1 ? "black" : "white")};
// `;

export const WrapMap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapAddress = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Address = styled.div`
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  margin: 10px;
`;

export const Map = styled.div`
  width: 792px;
  height: 360px;
  background-color: gray;
`;
