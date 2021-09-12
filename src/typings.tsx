export interface IVMState {
  inventory: TInventory
  selectedProduct: number,
  instructionsMsg: string,
  pickupBoxProduct: number,
  refillStatus: boolean,
  purchaseCounter: number,
  rewardsProgramStatus: boolean,
};

export type TInventory = Array<IProduct>;

export interface IProduct {
  id: number,
  productImg: string,
  quantity: number,
};