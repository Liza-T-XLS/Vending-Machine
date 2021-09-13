// == Imports

import React, { MouseEvent } from 'react';
import classNames from 'classnames';

// == Component

type Props = {
  selectedProduct: number,
  setSelectedProduct: (productId: number) => void,
  rewardsProgramStatus: boolean,
};

const Pad = ({ selectedProduct, setSelectedProduct, rewardsProgramStatus }: Props) => {
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

  return (
    <div className="pad">
      {arr.map((arrElement) => {
        const padNumberClassName = classNames('padNumber', {selected: arrElement === selectedProduct});
        const padNumberId = arrElement === 9 && rewardsProgramStatus ? 888 : arrElement;
        const padNumberDisplay = arrElement === 9 && rewardsProgramStatus ? '888' : `00${arrElement}`;
        return (
        <div key={arrElement} id={padNumberId.toString()} className={padNumberClassName} onClick={onSelectHandler}>{padNumberDisplay}</div>
      )})}
    </div>
  )
};

// == Export

export default Pad;