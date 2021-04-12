const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
// const expressJwt = require('express-jwt');
require('dotenv/config');
require('./dbconfig');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
server.applyMiddleware({
  app,
});

// The `listen` method launches a web server.
mongoose.connection.once('open', function () {
  console.log('Mongoose Connected 🍻');
  app.listen({ port: 4000 }, () => {
    console.log(
      `🚀  Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
});
