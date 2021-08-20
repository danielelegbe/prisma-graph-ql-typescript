import { PrismaClient } from '.prisma/client';
import { Resolvers, Post, User } from './generated/graphql';
const prisma = new PrismaClient();
export const resolvers: Resolvers = {
  Query: {
    getPosts: async (): Promise<Post[]> => {
      return await prisma.post.findMany();
    },
    getUsers: async (): Promise<User[]> => {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    createPost: async (parent, args): Promise<Post> => {
      return prisma.post.create({
        data: args,
      });
    },
    createUser: async (parent, args): Promise<User> => {
      return prisma.user.create({
        data: args,
      });
    },
  },
};
