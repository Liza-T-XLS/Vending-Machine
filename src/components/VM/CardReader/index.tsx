// == Imports

import React, { MouseEvent } from 'react';
import classNames from 'classnames';

import creditCard from '../../../images/creditCard.svg';

import { TInventory } from '../../../typings';

// == Component

type Props = {
  inventory: TInventory,
  selectedProduct: number,
  processOrder: () => void,
  pickupBoxProduct: number,
};

const CardReader = ({ inventory, selectedProduct, processOrder, pickupBoxProduct }: Props) => {
  const onPayHandler = (event: MouseEvent<HTMLDivElement>): void => {
    if (selectedProduct > 0 && inventory[selectedProduct - 1].quantity > 0) {
      processOrder();
    }
  };

  const cardReaderClassName = classNames('cardReader', {unavailable: selectedProduct === 0 || inventory[selectedProduct - 1]?.quantity === 0 || pickupBoxProduct > 0 });

  return (
    <div className={cardReaderClassName} onClick={onPayHandler}>
      <img className="creditCardImg" src={creditCard} alt="creditCard" />
    </div>
  );
};

// == Export

export default CardReader;