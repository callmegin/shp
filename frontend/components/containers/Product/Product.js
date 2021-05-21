import React from 'react';
import { gql } from '@apollo/client';

export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      name
      price
      category
      type
      image {
        secure_url
      }
      reviews {
        rating
        comment
        createdBy {
          id
          userName
          email
        }
      }
    }
  }
`;

const Product = ({ data }) => {
  return (
    <div>
      <img src={data.image.secure_url} />
    </div>
  );
};

export default Product;
