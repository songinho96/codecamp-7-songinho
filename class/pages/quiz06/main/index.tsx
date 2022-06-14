import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function ReactHookFormPage() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const onClickSubmit = async (data) => {
    const baskets = localStorage.getItem("baskets");
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      if (baskets) {
        if (
          confirm(
            "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?"
          ) === true
        ) {
          router.push("/quiz06/basket");
        } else {
          return false;
        }
      } else {
        alert("환영합니다.");
        router.push("/quiz06");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이름: <input type="text" {...register("email")} />
      패스워드: <input type="password" {...register("password")} />
      <button>로그인 하기</button>
    </form>
  );
}
