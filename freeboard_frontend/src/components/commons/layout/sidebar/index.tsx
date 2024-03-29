import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { MouseEvent, useEffect, useState } from "react";
import { breakPoints } from "../../../../commons/styles/media";

interface IPickItems {
  images: string;
  _id: string;
}

const Image = styled.img`
  width: 85px;
  height: 85px;
  border: 1px solid gray;
  cursor: pointer;
`;

const Wrap = styled.div`
  /* width: 85px;
  height: 85px; */
  margin-bottom: 30px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 115px;
  height: 373px;
  position: fixed;
  top: 220px;
  right: calc(50% - 650px);
  z-index: 20;
  border: 1px solid black;
  background-color: white;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export default function SideBar() {
  const router = useRouter();
  const [todayItems, setTodayItems] = useState<IPickItems[]>([]);

  useEffect(() => {
    const today = JSON.parse(sessionStorage.getItem("today") || "[]");
    setTodayItems(today);
  }, [todayItems.length++]);

  const onClickMoveDetail = (event: MouseEvent<HTMLImageElement>) => {
    router.push(`/products/${event.currentTarget.id}`);
  };

  return (
    <Wrapper>
      <Label>최근 본 상품</Label>
      {todayItems.map((el) => (
        <Wrap key={el._id}>
          <Image
            src={
              el.images[0]
                ? `https://storage.googleapis.com/${el.images[0]}`
                : "/images/noimage.gif"
            }
            id={el._id}
            onClick={onClickMoveDetail}
          />
        </Wrap>
      ))}
    </Wrapper>
  );
}
