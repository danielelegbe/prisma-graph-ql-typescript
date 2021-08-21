import { Post, User, Resolvers } from './generated/graphql';
export const resolvers: Resolvers = {
  Query: {
    getPosts: async (parent, args, ctx) => {
      const allPosts = await ctx.prisma.post.findMany();
      return allPosts as Post[];
    },
    getUsers: async (parent, args, ctx) => {
      const allUsers = await ctx.prisma.user.findMany();
      return allUsers as User[];
    },
  },
  Mutation: {
    createPost: async (parent, args, ctx) => {
      const newPost = await ctx.prisma.post.create({
        data: {
          authorId: args.id,
          title: args.data.title,
          description: args.data.description,
        },
      });
      return newPost as Post;
    },
    createUser: async (parent, { data }, ctx) => {
      // console.log(data.posts);
      const newUser = await ctx.prisma.user.create({
        data: {
          username: data.username,
          email: data.email,
          posts: {
            create: data.posts!,
          },
        },
        include: { posts: true },
      });
      return newUser as User;
    },
  },

  User: {
    posts: async (parent, args, ctx) => {
      const allPosts = await ctx.prisma.user
        .findUnique({
          where: {
            id: parent.id,
          },
        })
        .posts();
      // console.log(allPosts);
      return allPosts as Post[];
    },
  },

  Post: {
    author: async (parent, args, ctx) => {
      const foundUser = await ctx.prisma.post
        .findUnique({
          where: {
            id: parent.id,
          },
        })
        .author();

      console.log(foundUser);
      return foundUser as User;
    },
  },
};
