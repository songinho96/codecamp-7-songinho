import { useQuery } from "@apollo/client";
import { useAuth } from "../../../commons/hooks/useAuth";
import MyPagePresenter from "./UserMypage.presenter";
import {
  FETCH_POINT_LOADING,
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./UserMypage.quries";

export default function MyPageContainer() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const { data: fetchPointLoading } = useQuery(FETCH_POINT_LOADING);

  const { data: fetchPointTransactionsOfLoading } = useQuery(
    FETCH_POINT_TRANSACTIONS_LOADING
  );

  const { data: fetchPointTransactions } = useQuery(FETCH_POINT_TRANSACTIONS);

  useAuth();
  // const router = useRouter();

  console.log(fetchPointLoading?.fetchPointTransactionsCountOfLoading);
  console.log(fetchPointTransactionsOfLoading);
  console.log(fetchPointTransactions);

  // useEffect(() => {
  //   if (!data) {
  //     Modal.error({ content: "로그인 먼저 해주세요." });
  //     router.push("/user/login");
  //   }
  // }, []);
  return (
    <MyPagePresenter
      data={data}
      fetchPointTransactions={fetchPointTransactions}
    />
  );
}
