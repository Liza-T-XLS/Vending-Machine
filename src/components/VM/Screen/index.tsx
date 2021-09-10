// == Imports

import React, { MouseEvent } from 'react';
import classNames from 'classnames';

import { TInventory } from '../../../typings';

// == Component

type Props = {
  inventory: TInventory,
  selectedProduct: number,
  setSelectedProduct: (productId: number) => void,
  instructionsMsg: string,
};

const Screen = ({ inventory, selectedProduct, setSelectedProduct, instructionsMsg }: Props) => {
  // array created in order to automatically generate pad numbers in pad
  // (number of elements in array will equal number of pad numbers)
  const arr = [];
  const maxQuantity = 9;
  for (let quantity = 1; quantity <= maxQuantity; quantity++) {
    arr.push(quantity);
  }

  const onSelectHandler = (event: MouseEvent<HTMLImageElement>): void => {
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
  <div className="pad">
    {arr.map((arrElement) => {
      const padNumberClassName = classNames('padNumber', {selected: arrElement === selectedProduct});
      return (
      <div key={arrElement} id={arrElement.toString()} className={padNumberClassName} onClick={onSelectHandler}>{`00${arrElement}`}</div>
    )})}
  </div>
  {selectedProduct > 0 && (
    <div className="selectedProduct">
      <img className="selectedProductImg" src={selectedProductImg} alt="selected product" />
      <p className="unitLeft">{selectedProductQtyMsg}</p>
    </div>
  )}
</div>
)};

// == Export

export default Screen;