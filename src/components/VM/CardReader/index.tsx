// == Imports

import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './cardReader.scss';

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
    const selectedItem = inventory.find(item => item.id === selectedProduct);
    if (selectedProduct > 0 && selectedItem !== undefined && selectedItem.quantity > 0) {
      processOrder();
    }
  };

  const cardReaderClassName = classNames('cardReader', {unavailable: selectedProduct === 0 || inventory[selectedProduct - 1]?.quantity === 0 || pickupBoxProduct > 0 });

  return (
    <div className={cardReaderClassName} onClick={onPayHandler} title="pay">
      <img className="creditCardImg" src={creditCard} alt="creditCard" />
    </div>
  );
};

// == PropTypes

CardReader.propTypes = {
  inventory: PropTypes.array.isRequired,
  selectedProduct: PropTypes.number.isRequired,
  processOrder: PropTypes.func.isRequired,
  pickupBoxProduct: PropTypes.number.isRequired,
};

// == Export

export default CardReader;