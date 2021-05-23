import React from 'react';
import { gql } from '@apollo/client';

import * as Styled from './styles';

export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      name
      description
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
  data && console.log(data);
  return (
    <>
      <div>
        <Styled.Image src={data.image.secure_url} />
      </div>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p>{data.price}$</p>
        <div>
          <div>
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <button>ADD TO CART</button>
          <button>BUY</button>
        </div>
      </div>
      <div>
        {data.reviews.map((review) => {
          return (
            <div key={review.createdBy.id}>
              <h4>{review.createdBy.userName}</h4>
              <h4>{review.createdBy.email}</h4>
              <p>{review.rating}</p>
              <p>{review.comment}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
