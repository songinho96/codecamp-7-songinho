import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const WrapTop = styled.div`
  display: flex;
  margin: 4% 0;
`;

export const TopAll = styled.div`
  font-size: 1.12rem;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${(props) => props.isPoint === "AllPoint" && "700"};
  border-bottom: ${(props) =>
    props.isPoint === "AllPoint" && "2px solid #FED602"};
`;

export const TopCharge = styled.div`
  font-size: 1.12rem;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${(props) => props.isPoint === "ChargePoint" && "700"};
  border-bottom: ${(props) =>
    props.isPoint === "ChargePoint" && "2px solid #FED602"};
`;

export const TopPaid = styled.div`
  font-size: 1.12rem;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${(props) => props.isPoint === "PaidPoint" && "700"};
  border-bottom: ${(props) =>
    props.isPoint === "PaidPoint" && "2px solid #FED602"};
`;

export const TopSell = styled.div`
  font-size: 1.12rem;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${(props) => props.isPoint === "SellPoint" && "700"};
  border-bottom: ${(props) =>
    props.isPoint === "SellPoint" && "2px solid #FED602"};
`;

export const ListTitleRow = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #bdbdbd;
  border-top: 1px solid #bdbdbd;
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;
`;

export const TItleDateRow = styled.div`
  width: 20%;
  text-align: center;
`;

export const TItleStatusRow = styled.div`
  width: 30%;
  text-align: center;
`;

export const TItleChargeRow = styled.div`
  width: 20%;
  text-align: center;
`;

export const TItleMoneyRow = styled.div`
  width: 30%;
  text-align: center;
`;

export const TitleSellerRow = styled.div`
  width: 20%;
  text-align: center;
`;
