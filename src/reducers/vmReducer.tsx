// == Imports

import { AnyAction } from 'redux'
import { IVMState } from '../typings';
import inventory from '../data';

import { SET_SELECTED_PRODUCT, PROCESS_ORDER, EMPTY_PICKUP_BOX } from '../actions/vm';

// == Initial state

const initialState: IVMState = {
  inventory: inventory,
  selectedProduct: 0,
  instructionsMsg: 'Please select a product',
  pickupBoxProduct: 0,
};

// == Reducer

const vmReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_SELECTED_PRODUCT: {
      let newMsg: string = '';
      if(action.productId > 0 && state.inventory[action.productId - 1].quantity > 0) {
        newMsg = 'Please proceed to payment using the card reader (or choose another product)';
      } else if (action.productId > 0 && state.inventory[action.productId - 1].quantity === 0) {
        newMsg = 'Sorry, the product you have selected is currently not available, please choose another product';
      };
      return {
        ...state,
        selectedProduct: action.productId,
        instructionsMsg: newMsg,
      };
    }
    case PROCESS_ORDER:
      return {
        ...state,
        instructionsMsg: 'Thank you for your purchase! Please retrieve your product in the pick-up box',
        pickupBoxProduct: state.selectedProduct,
        selectedProduct: {...initialState}.selectedProduct,
      };
    case EMPTY_PICKUP_BOX:
      return {
        ...state,
        pickupBoxProduct: {...initialState}.selectedProduct,
        instructionsMsg: {...initialState}.instructionsMsg,
      };
    default: return state;
  }
};

export default vmReducer;