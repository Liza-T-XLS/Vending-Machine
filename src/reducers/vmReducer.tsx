// == Imports

import { AnyAction } from 'redux'
import { TInventory } from '../typings';
import inventory from '../data';

import { SET_SELECTED_PRODUCT } from '../actions/vm';

// == Initial state

interface vmState {
  inventory: TInventory
  selectedProduct: number,
}

const initialState: vmState = {
  inventory: inventory,
  selectedProduct: 0,
};

// == Reducer

const vmReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.productId,
      }
    default: return state;
  }
};

export default vmReducer;