import { context } from './context';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: context,
  });
  await server.start();
  server.applyMiddleware({ app });
  app.listen(3000, () => {
    console.log('listening on port 3000');
  });
}
startServer();
