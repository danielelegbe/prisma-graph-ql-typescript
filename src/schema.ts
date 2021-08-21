import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
