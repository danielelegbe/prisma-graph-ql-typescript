"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const resolvers_1 = require("./resolvers");
const schema_1 = require("./schema");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function startServer() {
    const app = express_1.default();
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
        context: context_1.context,
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
}
startServer();
//# sourceMappingURL=index.js.map