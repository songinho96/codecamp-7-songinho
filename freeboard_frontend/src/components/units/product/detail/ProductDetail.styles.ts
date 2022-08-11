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
  word-break: break-all;
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
  padding-bottom: 15px;
`;

export const WrapInfo = styled.div`
  display: flex;
  padding-bottom: 15px;
`;

export const WrapHeart = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const Count = styled.div`
  font-size: 20px;
  padding-left: 7px;
  color: #cccccc;
`;

export const WrapRemarks = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const Remark = styled.div`
  font-size: 1.4rem;
  color: #b5b5b5;
`;
export const Contents = styled.div`
  padding-top: 7px;
  font-size: 1rem;
  word-break: break-all;
`;

export const WrapTags = styled.div`
  display: flex;
  padding-bottom: 30px;
  flex-direction: column;
`;

export const Tags = styled.div`
  margin-right: 10px;
  padding-top: 7px;
`;

export const WrapLocation = styled.div`
  padding-bottom: 30px;
  border-bottom: 1.5px solid #eeeeee;
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
  padding-top: 30px;
`;

export const WrapProduct = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1.5px solid #eeeeee;
  padding-right: 30px;
`;

export const WrapProductContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.3rem;
  padding-bottom: 20px;
  border-bottom: 1.5px solid #eeeeee;
  font-weight: 700;
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
  font-size: 17px;
  padding: 20px 0;
  border-bottom: 1.5px solid #eeeeee;
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
  padding-top: 30px;
  border-bottom: 1.5px solid #eeeeee;
`;

export const WrapAddress = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Address = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

export const DiveideLine = styled.div`
  height: 170px;
  width: 0.02vw;
  border-width: 1;
  background-color: white;
`;

export const WrapComment = styled.div`
  width: 40%;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const WrapSeller = styled.div`
  display: flex;
  padding: 15px 0 15px 15px;
  align-items: center;
  border-bottom: 1.5px solid #eeeeee;
`;

export const ProfileImage = styled.div``;

export const Profile = styled.img``;

export const UserId = styled.div`
  margin-left: 20px;
`;
