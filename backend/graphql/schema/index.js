const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: ID!
    userName: String!
    email: String!
    reviews: [Review]
  }
  type Product {
    id: ID!
    name: String!
    price: Float!
    category: String!
    reviews: [Review]
  }
  type Review {
    id: ID!
    rating: Float
    comment: String
    createdBy: User!
    product: Product!
  }
  type Categories {
    id: ID!
    category: String!
  }
  type Query {
    user(id: ID!): User #don't know if ill need this one
    getUsers: [User]
    getProducts(category: String): [Product]
    getProduct(id: ID!): Product
    getReviews: [Review]
  }
  type Mutation {
    addUser(userName: String!, email: String!): User
    login(email: String!, password: String!): String
    addProduct(name: String!, price: Float!, category: String!): Product
    addReview(
      rating: Float
      comment: String
      createdBy: ID!
      product: ID!
    ): Review
  }
`;
