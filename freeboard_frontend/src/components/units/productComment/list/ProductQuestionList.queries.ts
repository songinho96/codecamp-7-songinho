import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      createdAt
      user {
        email
        _id
        name
      }
    }
  }
`;

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

// export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
//   mutation updateUseditemQuestionAnswer(
//     $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
//     $useditemQuestionAnswerId: ID!
//   ) {
//     updateUseditemQuestionAnswer(
//       updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
//       useditemQuestionAnswerId: $useditemQuestionAnswerId
//     ) {
//       _id
//       contents
//       createdAt
//     }
//   }
// `;
