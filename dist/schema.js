"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type Post {
    id: Int!
    title: String!
    description: String!
    author: User!
    authorId: Int!
  }

  type User {
    id: Int!
    username: String!
    email: String!
    posts: [Post!]!
  }

  input PostCreateInput {
    title: String!
    description: String!
  }

  input UserCreateInput {
    username: String!
    email: String!
    posts: [PostCreateInput!]
  }

  type Query {
    getPosts: [Post!]!
    getUsers: [User!]!
  }

  type Mutation {
    createUser(data: UserCreateInput!): User!
    createPost(id: Int!, data: PostCreateInput!): Post!
  }
`;
//# sourceMappingURL=schema.js.map