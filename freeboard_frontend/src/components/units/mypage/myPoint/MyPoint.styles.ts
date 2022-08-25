import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IisPointProps } from "./MyPoint.types";

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const WrapTop = styled.div`
  display: flex;
  margin: 4% 0;

  @media ${breakPoints.tablet} {
    padding-left: 3%;
  }

  @media ${breakPoints.mobile} {
    padding-left: 3%;
  }
`;

export const TopAll = styled.div`
  font-size: 1.12rem;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${(props: IisPointProps) =>
    props.isPoint === "AllPoint" && "700"};
  border-bottom: ${(props: IisPointProps) =>
    props.isPoint === "AllPoint" && "2px solid #FED602"};

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const TopCharge = styled.div`
  font-size: 1.12rem;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${(props: IisPointProps) =>
    props.isPoint === "ChargePoint" && "700"};
  border-bottom: ${(props: IisPointProps) =>
    props.isPoint === "ChargePoint" && "2px solid #FED602"};

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const TopPaid = styled.div`
  font-size: 1.12rem;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${(props: IisPointProps) =>
    props.isPoint === "PaidPoint" && "700"};
  border-bottom: ${(props: IisPointProps) =>
    props.isPoint === "PaidPoint" && "2px solid #FED602"};

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const TopSell = styled.div`
  font-size: 1.12rem;
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${(props: IisPointProps) =>
    props.isPoint === "SellPoint" && "700"};
  border-bottom: ${(props: IisPointProps) =>
    props.isPoint === "SellPoint" && "2px solid #FED602"};

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
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

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const TItleStatusRow = styled.div`
  width: 30%;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const TItleChargeRow = styled.div`
  width: 20%;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const TItleMoneyRow = styled.div`
  width: 30%;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const TitleSellerRow = styled.div`
  width: 20%;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;
