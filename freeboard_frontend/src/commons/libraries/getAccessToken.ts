import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export async function getAccessToken() {
  try {
    const graphQlClient = new GraphQLClient(
      "https://backend07.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error: any) {
    console.log(error.message); // refreshToken 만료, 로그인페이지로 이동
  }
}
