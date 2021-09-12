// ==  Action types

export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
export const PROCESS_ORDER = 'PROCESS_ORDER';
export const EMPTY_PICKUP_BOX = 'EMPTY_PICKUP_BOX';
export const SET_REFILL_STATUS = 'SET_REFILL_STATUS';
export const REFILL_MACHINE = 'REFILL_MACHINE';
export const ACTIVATE_REWARDS_PROGRAM = 'ACTIVATE_REWARDS_PROGRAM';

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
});

export const setRefillStatus = (boolean: boolean) => ({
  type: SET_REFILL_STATUS,
  boolean,
});

export const refillMachine = () => ({
  type: REFILL_MACHINE,
});

export const activateRewardsProgram = () => ({
  type: ACTIVATE_REWARDS_PROGRAM,
});