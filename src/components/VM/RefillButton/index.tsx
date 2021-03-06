// == Imports

import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './refillButton.scss';

import wheelbarrow from '../../../images/wheelbarrow.svg';

// == Component

type Props = {
  setRefillStatus: (boolean: boolean) => void,
  refillMachine: () => void,
};

const RefillButton = ({ setRefillStatus, refillMachine }: Props) => {
  const onRefillHandler = (event: MouseEvent<HTMLDivElement>): void => {
    setRefillStatus(true);
    setTimeout(() => {
      refillMachine();
     }, 3000);
  };

  const refillButtonClassName = classNames('refillButton');

  return (
    <div className={refillButtonClassName} onClick={onRefillHandler} title="refill">
      <img className="wheelbarrowImg" src={wheelbarrow} alt="wheelbarrow"/>
    </div>
  );
};

// == PropTypes

RefillButton.propTypes = {
  setRefillStatus: PropTypes.func.isRequired,
  refillMachine: PropTypes.func.isRequired,
};

// == Export

export default RefillButton;