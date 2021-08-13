import * as actionTypes from './actionTypes';

export const addToCart = (product) => {
  console.log('actions - add to cart');
  console.log(product);
  //think about localstorage - where it's going to be used

  return {
    type: actionTypes.ADD_TO_CART,
    product: product,
  };
};
