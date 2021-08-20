"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const client_1 = require(".prisma/client");
const prisma = new client_1.PrismaClient();
exports.resolvers = {
    Query: {
        getPosts: async () => {
            return await prisma.post.findMany();
        },
        getUsers: async () => {
            return await prisma.user.findMany();
        },
    },
    Mutation: {
        createPost: async (parent, args) => {
            return prisma.post.create({
                data: args,
            });
        },
        createUser: async (parent, args) => {
            return prisma.user.create({
                data: args,
            });
        },
    },
};
//# sourceMappingURL=resolvers.js.map