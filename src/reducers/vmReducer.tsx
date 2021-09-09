// == Imports

import { AnyAction } from 'redux'

// == Initial state

interface vmState {
  inventory: Array<{}>
}

const initialState: vmState = {
  inventory: [],
};

// == Reducer

const vmReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    default: return state;
  }
};

export default vmReducer;