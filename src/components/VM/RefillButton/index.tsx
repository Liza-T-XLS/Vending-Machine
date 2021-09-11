// == Imports

import React, { MouseEvent } from 'react';
import classNames from 'classnames';

import wheelbarrow from '../../../images/wheelbarrow.svg';

// == Component

type Props = {
  refillMachine: () => void,
};

const RefillButton = ({ refillMachine }: Props) => {
  const onRefillHandler = (event: MouseEvent<HTMLDivElement>): void => {
    refillMachine();
  };

  const refillButtonClassName = classNames('refillButton');

  return (
    <div className={refillButtonClassName} onClick={onRefillHandler}>
      <img className="wheelbarrowImg" src={wheelbarrow} alt="wheelbarrow" />
    </div>
  );
};

// == Export

export default RefillButton;