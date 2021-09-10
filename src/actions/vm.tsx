// ==  Action types

export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';

// == Action creators

export const setSelectedProduct = (productId: number) => ({
  type: SET_SELECTED_PRODUCT,
  productId,
});