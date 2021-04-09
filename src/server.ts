import express from 'express';
import fs from 'fs';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up apollo server
const typeDefs = gql(fs.readFileSync('src/schema.graphql').toString());
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
});
graphqlServer.applyMiddleware({ app });

// Express routes
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server started on port: 5000');
});
