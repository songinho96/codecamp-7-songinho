import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

// 장바구니

// 장바구니

const [, setBasketPageState] = useRecoilState(BasketPageState);

const [isBaskets, setIsBaskets] = useState(false);

const onClickBasket = (newBasket) => () => {
  const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
  setIsBaskets(true);

  const temp = baskets.filter(
    (basket: any) => basket._id === data.fetchUseditem._id
  );
  if (temp.length === 1) {
    alert("이미 장바구니에 담겼습니다.");
    return;
  }

  const newBaskets = [...baskets, newBasket];
  // setIsBaskets(false);

  // const Delete = baskets.filter(
  //   (baskets: any) => baskets._id !== data.fetchUseditem._id
  // );
  // console.log(baskets);
  // localStorage.setItem("baskets", JSON.stringify(Delete));
  localStorage.setItem("baskets", JSON.stringify(newBaskets));

  setBasketPageState(newBaskets);
  // return;
  // }

  // const { __typename, ...newEl } = data.fetchUseditem;
  // baskets.push(newEl);
  // localStorage.setItem("baskets", JSON.stringify(baskets));
};
