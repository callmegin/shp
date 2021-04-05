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
  context: ({ req }) => {
    const user = req.user || null;
    // console.log('============');
    // console.log(user);
    // return { user };
  },
});

const app = express();
server.applyMiddleware({
  app,
  whatever: () =>
    new Promise((resolve, reject) => {
      if (mongoose.connection.readyState > 0) {
        console.log('WHATEVER SHMATEVER!!!!!!!!!');
        resolve();
      } else {
        reject();
      }
    }),
});

// The `listen` method launches a web server.
app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});
