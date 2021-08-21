"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        getPosts: async (parent, args, ctx) => {
            const allPosts = await ctx.prisma.post.findMany();
            return allPosts;
        },
        getUsers: async (parent, args, ctx) => {
            const allUsers = await ctx.prisma.user.findMany();
            return allUsers;
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
            return newPost;
        },
        createUser: async (parent, { data }, ctx) => {
            // console.log(data.posts);
            const newUser = await ctx.prisma.user.create({
                data: {
                    username: data.username,
                    email: data.email,
                    posts: {
                        create: data.posts,
                    },
                },
                include: { posts: true },
            });
            return newUser;
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
            return allPosts;
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
            return foundUser;
        },
    },
};
//# sourceMappingURL=resolvers.js.map