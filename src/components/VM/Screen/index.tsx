// == Imports

import React from 'react';

import { TInventory } from '../../../typings';

import Instructions from '../../../containers/VM/Instructions';
import Ad from '../../../containers/VM/Screen/Ad';
import Pad from '../../../containers/VM/Screen/Pad';

import deliveryTruck from '../../../images/deliveryTruck.svg';

// == Component

type Props = {
  inventory: TInventory,
  selectedProduct: number,
  pickupBoxProduct: number,
  refillStatus: boolean,
};

const Screen = ({ inventory, selectedProduct, pickupBoxProduct, refillStatus }: Props) => {
  const selectedProductImg = inventory.find(item => item.id === selectedProduct)?.productImg;
  const selectedProductQty = inventory.find(item => item.id === selectedProduct)?.quantity;
  const selectedProductQtyMsg = selectedProductQty !== undefined && selectedProductQty <= 1 ? `${selectedProductQty} unit left` : `${selectedProductQty} units left`;

  return (
    <div className="screen">
      <Instructions />
      {pickupBoxProduct === 0 && refillStatus === false && (
        <Pad />
      )}
      {pickupBoxProduct > 0 && refillStatus === false && (
        <Ad />
      )}
      {selectedProduct > 0 && refillStatus === false && (
        <div className="selectedProduct">
          <img className="selectedProductImg" src={selectedProductImg} alt="selected product" />
          <p className="unitLeft">{selectedProductQtyMsg}</p>
        </div>
      )}
      {refillStatus === true && (
        <div className="deliveryScreen">
          <img className="deliveryTruck" src={deliveryTruck} alt="delivery truck" />
        </div>
      )}
    </div>
  );
};

// == Export

export default Screen;