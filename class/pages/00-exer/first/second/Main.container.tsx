// import { useQuery } from '@apollo/client'
// import { FETCH_ALL_PRODUCT } from './Main.queries'
import MainUI from "./Main.presenter";

export default function Main() {
  // const { data } = useQuery(FETCH_ALL_PRODUCT)
  // const NewArrival = data?.fetchAllProduct.slice(0, 6)

  // console.log(data)
  return (
    <>
      <MainUI />
    </>
  );
}
