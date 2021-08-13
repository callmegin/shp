import * as actionTypes from '../actions/actionTypes';

const initialState = {
  addedIds: [],
  quantityById: [],
  addedProducts: [],
  totalPrice: 0,
};

const addProduct = (state, action) => {
  console.log('reducer: addProduct');
  return null;
};

const reducer = (state = initialState, action) => {
  console.log('reducer : reducer');
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addProduct(state, action);
    default:
      return state;
  }
};

export default reducer;
