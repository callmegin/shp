const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    userName: String!
    email: String!
    ratings: [Rating]
    # comments: [Comment]
  }
  type Product {
    id: ID!
    name: String!
    price: Float!
    category: String!
    ratings: [Rating]
    # comments: [Comment]
  }
  type Rating {
    id: ID!
    rating: Float!
    createdBy: User!
    product: Product!
  }
  type Comment {
    id: ID!
    comment: String!
    rating: Rating!
    createdBy: User!
  }

  type Query {
    user(id: ID!): User #don't know if ill need this one
    getUsers: [User]
    getProducts: [Product]
    getProduct(id: ID!): Product
    getRatings: [Rating]
  }
  type Mutation {
    addUser(userName: String!, email: String!): User
    login(email: String!, password: String!): String
    addProduct(name: String!, price: Float!, category: String!): Product
    addRating(rating: Float!, product: ID!, createdBy: ID!): Rating
  }
`;
