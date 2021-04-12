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
    type: String!
    image: ProductImage!
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
    types: [Types]
  }
  type Types {
    id: ID!
    type: String!
    category: Categories!
    products: [Product!]
  }

  type ProductImage {
    id: ID!
    asset_id: String!
    public_id: String!
    version_id: String!
    width: Int!
    height: Int!
    created_at: String!
    url: String!
    secure_url: String!
    original_filename: String!
    product: Product!
  }
  type MainImage {
    id: ID!
    category: String!
  }

  type Query {
    user(id: ID!): User #don't know if ill need this one
    getUsers: [User]
    getProducts(category: String, type: String): [Product]
    getProduct(id: ID!): Product
    getReviews: [Review]
    getCategories: [Categories]
    getCategory(id: ID, category: String): Categories
    getTypes: [Types]
    getType(id: ID, type: String): Types
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
