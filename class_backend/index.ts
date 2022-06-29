import { DataSource } from "typeorm";

import { ApolloServer, gql } from "apollo-server";
import { Board } from "./Board.postgres";

// REST: express

// GRAPHQL: ApolloServer

// 1. 타입 - typeDefs
const myTypeDefs = gql`
  input CreateBoardInput { #input에 들어가는 타입은 input type이 따로 있다.
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String! # - 연습용(example)
    createBoard(createBoardInput: CreateBoardInput): String # - 실무용(backend07)
  }
`;

// 2. 함수(API) - resolvers
const myResolvers = {
  Query: {
    fetchBoard: async () => {
      const result = await Board.find(); // 목록 조회하기 데이터를 DB로 부터 가지고 와야한다.

      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      args.writer;
      args.title;
      args.contents;

      await Board.insert({
        // writer: args.writer,
        // title: args.title,
        // contents: args.contents

        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents
      });

      // 수정하면?
      // Board.update({writer: "철수"}, {title: "제목2"})

      // 삭제하면?
      // Board.delete(writer: "철수")
      // Board.update({writer: "철수"}, {deletedAy: new Date()}) 삭제가 된것처럼 보여주지 않음 날짜로 하면 삭제가 됐고 언제 삭제됐는지 알 수 있음

      return "게시물 등록에 성공했습니다!!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
  cors: true,
});

// server
//   .listen(4000)
//   .then(() => {
//     console.log("서버 실행 성공!!!");
//   })
//   .catch(() => {
//     console.log("서버 실행 실패");
//   });

const AppDatasource = new DataSource({
  // DataSource 접속정보 작성함
  type: "postgres",
  host: "34.64.124.242",
  port: 5022,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Board], // 테이블 만들기
  synchronize: true, // 연결시키겠다
  logging: true,
});

// 연결시켜줘
AppDatasource.initialize().then(() => {
  // 성공했을 때
  console.log("연결성공!!!");
  // 백엔드 API를 리슨(24시간 동안 접속가능하게 대기상태로 만들어 주기)
  server
    .listen(4000)
    .then(() => {
      console.log("서버 실행 성공!!!");
    })
    .catch(() => {
      console.log("서버 실행 실패");
    }); //
});
