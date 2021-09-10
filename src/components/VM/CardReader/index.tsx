// == Imports

import React, { MouseEvent } from 'react';

import creditCard from '../../../images/creditCard.svg';

import { TInventory } from '../../../typings';

// == Component

type Props = {
  inventory: TInventory,
  selectedProduct: number,
  processOrder: () => void,
};

const CardReader = ({ inventory, selectedProduct, processOrder }: Props) => {
  const onPayHandler = (event: MouseEvent<HTMLDivElement>): void => {
    if (selectedProduct > 0 && inventory[selectedProduct - 1].quantity > 0) {
      console.log('proceed to payment');
      processOrder();
    }
  };

  return (
    <div className="cardReader" onClick={onPayHandler}>
      <img className="creditCardImg" src={creditCard} alt="creditCard" />
    </div>
  );
};

// == Export

export default CardReader;