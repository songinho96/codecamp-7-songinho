import { DataSource } from "typeorm";

import { ApolloServer, gql } from "apollo-server";
import { Product } from "./Board.postgres";

const myTypeDefs = gql`
  input CreateProductInput {
    name: String
    detail: String
    price: Int
    seller: String
  }

  type Product {
    _id: String
    number: Int
    message: String
  }

  type Query {
    fetchProduct: [Product]
  }

  type Mutation {
    createProduct(createProductInput: CreateProductInput): String
  }
`;

const myResolvers = {
  Query: {
    fetchProduct: async () => {
      const result = await Product.find();

      return result;
    },
  },

  Mutation: {
    createProduct: async (_: any, args: any) => {
      args.writer;
      args.title;
      args.contents;

      await Product.insert({
        ...args.createProductInput,
      });

      return "게시물 등록에 성공했습니다!!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
  cors: true,
});

const AppDatasource = new DataSource({
  type: "postgres",
  host: "34.64.124.242",
  port: 5022,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entities: [Product],
  synchronize: true,
  logging: true,
});

AppDatasource.initialize().then(() => {
  console.log("연결성공!!!");

  server
    .listen(4000)
    .then(() => {
      console.log("서버 실행 성공!!!");
    })
    .catch(() => {
      console.log("서버 실행 실패");
    }); //
});
