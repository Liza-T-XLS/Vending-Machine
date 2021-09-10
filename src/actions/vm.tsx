// ==  Action types

export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
export const PROCESS_ORDER = 'PROCESS_ORDER';

// == Action creators

export const setSelectedProduct = (productId: number) => ({
  type: SET_SELECTED_PRODUCT,
  productId,
});

export const processOrder = () => ({
  type: PROCESS_ORDER,
});