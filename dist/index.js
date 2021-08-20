"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_1 = require("./resolvers");
const schema_1 = require("./schema");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
async function startServer() {
    const app = express_1.default();
    const server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
    await server.start();
    server.applyMiddleware({ app });
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
}
startServer();
//# sourceMappingURL=index.js.map