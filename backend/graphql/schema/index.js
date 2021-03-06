const { gql } = require('apollo-server-express');

module.exports = gql`
  #Scalars
  scalar Date

  type User {
    id: ID!
    userName: String!
    email: String!
    reviews: [Review]
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    category: String!
    type: String!
    image: ProductImage!
    averageRating: Float!
    reviewsCount: Int!
    reviews: [Review]
  }
  type Review {
    id: ID!
    rating: Float
    comment: String
    createdAt: Date
    createdBy: User!
    product: Product!
  }
  type Categories {
    id: ID!
    category: String!
    types: [Types]
    image: CategoryImage!
  }
  type Types {
    id: ID!
    type: String!
    category: Categories!
    productsCount: Int!
    products: [Product!]
  }

  type ProductImage {
    id: ID!
    asset_id: String!
    public_id: String!
    version_id: String!
    category: String!
    type: String!
    width: Int!
    height: Int!
    created_at: String!
    url: String!
    secure_url: String!
    thumb_url: String!
    thumb_secure_url: String!
    original_filename: String!
    product: Product!
  }

  type CategoryImage {
    id: ID!
    asset_id: String!
    public_id: String!
    version_id: String!
    category_name: String!
    width: Int!
    height: Int!
    created_at: String!
    url: String!
    secure_url: String!
    original_filename: String!
    category: Categories!
  }

  #Sorting
  input SortBy {
    field: String
    order: Order
  }
  enum Order {
    asc
    desc
  }

  #Pagination
  type Edge {
    cursor: String
    node: Product!
  }
  type ProductConnection {
    edges: [Edge]
    pageInfo: PageInfo
  }
  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
  }

  type Query {
    user(id: ID!): User #don't know if ill need this one
    getUsers: [User]
    getProducts(category: String, type: String): [Product]
    getProduct(id: ID!): Product
    getReviews(product: String): [Review]
    getCategories: [Categories]
    getCategory(id: ID, category: String): Categories
    getTypes: [Types]
    getType(id: ID, type: String): Types
    getImagesByName(fileName: String): [ProductImage]
    #Pagination
    getProductsCursor(
      limit: Int!
      cursor: String
      category: String
      type: [String]
      sortBy: SortBy
    ): ProductConnection
  }
  type Mutation {
    addUser(userName: String!, email: String!): User
    login(email: String!, password: String!): String
    addProduct(name: String!, price: Float!, category: String!): Product
    addReview(
      rating: Int
      comment: String
      createdBy: ID!
      product: ID!
    ): Review
  }
`;
