import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Post {
    id: Int!
    title: String!
    description: String!
  }

  type User {
    id: Int!
    username: String!
    email: String!
  }

  type Query {
    getPosts: [Post!]!
    getUsers: [User!]!
  }

  type Mutation {
    createPost(title: String!, description: String!): Post
    createUser(username: String!, email: String!): User
  }
`;
