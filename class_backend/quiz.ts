import { ApolloServer, gql } from "apollo-server-express";
import { database } from "firebase-admin";
import { createConnction, DataSource } from "typeorm";
import { Product, products } from "./Board.postgresQuiz";

const myTypeDefs = gql`
  # input CreateProductInput {
  #   _id: String
  #   seller: String
  #   name: String
  # }

  type Product {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchProdects: [products]
    fetchProdect: [Product]
  }

  # type Mutation {

  # }
`;

const myResolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await products.find();

      return result;
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
  cors: true,
});

const AppDatasource = new DataSource({
  type: "pastgres",
  host: "34.64.124.242",
  port: 5022,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  entitles: [Product],
  synchronize: true,
  logging: true,
});

AppDatasource.initialize().then(() => {
  console.log("연결 성공!!!");

  server
    .listen(4000)
    .then(() => {
      console.log("접속완료");
    })
    .catch(() => {
      console.log("접속 실패");
    });
});
