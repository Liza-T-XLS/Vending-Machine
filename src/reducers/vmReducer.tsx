// == Imports

import { AnyAction } from 'redux'
import { IVMState } from '../typings';
import inventory from '../data';

import { SET_SELECTED_PRODUCT } from '../actions/vm';

// == Initial state

const initialState: IVMState = {
  inventory: inventory,
  selectedProduct: 0,
  instructionsMsg: 'Please select a product',
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
      }
      return {
        ...state,
        selectedProduct: action.productId,
        instructionsMsg: newMsg,
      }
    }
    default: return state;
  }
};

export default vmReducer;