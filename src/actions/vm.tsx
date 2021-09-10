// ==  Action types

export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
export const PROCESS_ORDER = 'PROCESS_ORDER';
export const EMPTY_PICKUP_BOX = 'EMPTY_PICKUP_BOX';

// == Action creators

export const setSelectedProduct = (productId: number) => ({
  type: SET_SELECTED_PRODUCT,
  productId,
});

export const processOrder = () => ({
  type: PROCESS_ORDER,
});

export const emptyPickupBox = () => ({
  type: EMPTY_PICKUP_BOX,
})