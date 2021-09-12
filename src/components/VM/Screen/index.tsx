// == Imports

import React, { MouseEvent } from 'react';
import classNames from 'classnames';

import { TInventory } from '../../../typings';

import Ad from '../../../containers/VM/Screen/Ad';

import deliveryTruck from '../../../images/deliveryTruck.svg';

// == Component

type Props = {
  inventory: TInventory,
  selectedProduct: number,
  setSelectedProduct: (productId: number) => void,
  instructionsMsg: string,
  pickupBoxProduct: number,
  refillStatus: boolean,
};

const Screen = ({ inventory, selectedProduct, setSelectedProduct, instructionsMsg, pickupBoxProduct, refillStatus }: Props) => {
  // array created in order to automatically generate pad numbers in pad
  // (number of elements in array will equal number of pad numbers)
  const arr = [];
  const maxQuantity = 9;
  for (let quantity = 1; quantity <= maxQuantity; quantity++) {
    arr.push(quantity);
  }

  const onSelectHandler = (event: MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLDivElement;
    setSelectedProduct(parseInt(target.id));
  };

  const selectedProductImg = inventory[selectedProduct - 1]?.productImg;
  const selectedProductQty = inventory[selectedProduct - 1]?.quantity;
  const selectedProductQtyMsg = selectedProductQty <= 1 ? `${selectedProductQty} unit left` : `${selectedProductQty} units left`;

  return (
    <div className="screen">
      <div className="instructions">
        <p className="message">{instructionsMsg}</p>
      </div>
      {pickupBoxProduct === 0 && refillStatus === false && (
      <div className="pad">
        {arr.map((arrElement) => {
          const padNumberClassName = classNames('padNumber', {selected: arrElement === selectedProduct});
          return (
          <div key={arrElement} id={arrElement.toString()} className={padNumberClassName} onClick={onSelectHandler}>{`00${arrElement}`}</div>
        )})}
      </div>
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