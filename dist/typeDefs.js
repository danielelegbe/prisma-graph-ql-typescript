"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type Post {
    id: Int!
    title: String!
    description: String!
  }
  type Query {
    getPosts: [Post!]!
  }

  type Mutation {
    createPost(title: String!, description: String!): Post
  }
`;
//# sourceMappingURL=typeDefs.js.map