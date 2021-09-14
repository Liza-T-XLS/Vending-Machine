// == Imports

import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { TInventory } from '../../../typings';

// == Component

type Props = {
  inventory: TInventory,
  pickupBoxProduct: number,
  emptyPickupBox: () => void,
};

const PickupBox = ({ inventory, pickupBoxProduct, emptyPickupBox }: Props) => {
  const onPickupHandler = (event: MouseEvent<HTMLDivElement>): void => {
    emptyPickupBox();
  };
  const purchasedProductImg = inventory.find(item => item.id === pickupBoxProduct)?.productImg;
  const pickupBoxClassName = classNames('pickupBox', {lighted: pickupBoxProduct > 0});

  return (
    <div className={pickupBoxClassName}>
      <div className="trapezoid"></div>
      {pickupBoxProduct > 0 && (
        <img className="purchasedProduct" src={purchasedProductImg} alt="purchased product" onClick={onPickupHandler} />
      )}
    </div>
  );
};

// == PropTypes

PickupBox.propTypes = {
  inventory: PropTypes.array.isRequired,
  pickupBoxProduct: PropTypes.number.isRequired,
  emptyPickupBox: PropTypes.func.isRequired,
};

// == Export

export default PickupBox;