export interface IVMState {
  inventory: TInventory
  selectedProduct: number,
  instructionsMsg: string,
  pickupBoxProduct: number,
  purchaseCounter: number,
};

export type TInventory = Array<IProduct>;

export interface IProduct {
  id: number,
  productImg: string,
  quantity: number,
};