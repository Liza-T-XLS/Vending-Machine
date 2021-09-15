// == Imports

import { AnyAction } from 'redux'
import { IVMState } from '../typings';
import inventory from '../data';

import vendingMachine from '../images/vending-machine.svg';

import { SET_SELECTED_PRODUCT, PROCESS_ORDER, EMPTY_PICKUP_BOX, REFILL_MACHINE, ACTIVATE_REWARDS_PROGRAM, SET_REFILL_STATUS } from '../actions/vm';

// == Initial state

const initialState: IVMState = {
  inventory: inventory,
  selectedProduct: 0,
  instructionsMsg: 'Please select a product',
  pickupBoxProduct: 0,
  refillStatus: false,
  purchaseCounter: 0,
  rewardsProgramStatus: false,
};

// == Reducer

const vmReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case SET_SELECTED_PRODUCT: {
      let newMsg: string = '';
      const selectedProduct = state.inventory.find(item => item.id === action.productId);
      if(action.productId > 0 && selectedProduct !== undefined && selectedProduct.quantity > 0) {
        newMsg = 'Please proceed to payment using the card reader (or choose another product)';
      } else if (action.productId > 0 && selectedProduct !== undefined && selectedProduct.quantity === 0) {
        newMsg = 'Sorry, the product you have selected is currently unavailable, please choose another product';
      };
      return {
        ...state,
        selectedProduct: action.productId,
        instructionsMsg: newMsg,
      };
    }
    case PROCESS_ORDER: {
      const updatedInventory = [...state.inventory].map((item) =>
      item.id === state.selectedProduct ? {
        ...item,
        quantity: item.quantity - 1,
      } : item);
      return {
        ...state,
        inventory: updatedInventory,
        instructionsMsg: 'Thank you for your purchase! Please retrieve your product in the pick-up box',
        pickupBoxProduct: state.selectedProduct,
        purchaseCounter: state.purchaseCounter + 1,
        selectedProduct: {...initialState}.selectedProduct,
      };
    }
    case EMPTY_PICKUP_BOX: {
      let updatedInventory = [...state.inventory];
      let updatedRewardsProgramStatus = state.rewardsProgramStatus;
      let updatedPurchaseCounter = state.purchaseCounter;
      if (state.rewardsProgramStatus === true && state.pickupBoxProduct === 888) {
        updatedInventory = [...state.inventory].filter(item => item.id !== 888);
        updatedRewardsProgramStatus = false;
        updatedPurchaseCounter = {...initialState}.purchaseCounter;
      };
      return {
        ...state,
        inventory: updatedInventory,
        pickupBoxProduct: {...initialState}.selectedProduct,
        instructionsMsg: {...initialState}.instructionsMsg,
        rewardsProgramStatus: updatedRewardsProgramStatus,
        purchaseCounter: updatedPurchaseCounter,
      };
    }
    case SET_REFILL_STATUS: {
      let newMsg: string = state.instructionsMsg;
      if (action.boolean === true) {
        newMsg = 'Refilling...';
      }
      return {
        ...state,
        instructionsMsg: newMsg,
        refillStatus: action.boolean,
      };
    };
    case REFILL_MACHINE:
    return {
      ...state,
      ...initialState,
    };
    case ACTIVATE_REWARDS_PROGRAM: {
      const updatedInventory = [...state.inventory];
      updatedInventory.push({
        id: 888,
        productImg: vendingMachine,
        quantity: 1,
      });
      return {
        ...state,
        inventory: updatedInventory,
        rewardsProgramStatus: true,
      };
    };
    default: return state;
  }
};

export default vmReducer;