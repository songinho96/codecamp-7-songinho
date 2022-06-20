import { gql, useQuery } from "@apollo/client";
import { useAuth } from "../../src/components/commons/hooks/useAuth";

const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
    }
  }
`;

export default function LoginSuccessPage() {
  useAuth();
  const { data } = useQuery(FETCH_USER_LOGED_IN);
  return <div>{data?.fetchUserLoggedIn.name} 님 환영합니다.</div>;
}
