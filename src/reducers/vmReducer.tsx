// == Imports

import { AnyAction } from 'redux'
import { TInventory } from '../typings';
import inventory from '../data';

// == Initial state

interface vmState {
  inventory: TInventory
}

const initialState: vmState = {
  inventory: inventory,
};

// == Reducer

const vmReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    default: return state;
  }
};

export default vmReducer;