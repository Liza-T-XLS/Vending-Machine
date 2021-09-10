// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import './vm.scss';

import wheelbarrow from '../../images/wheelbarrow.svg';

import Product from '../../containers/VM/Product';
import Screen from '../../containers/VM/Screen';
import CardReader from '../../containers/VM/CardReader';
import PickupBox from '../../containers/VM/PickupBox';

import { TInventory } from '../../typings';

// == Component

type Props = {
  inventory: TInventory,
}

const VM = ({ inventory }: Props) => (
  <main>
    <div className="vm">
      <div className="left">
        <div className="sign">Vending-Machine</div>
        <div className="products">
          {inventory.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
        <PickupBox />
      </div>
      <div className="right">
        <Screen />
        <CardReader />
        <div className="refillButton">
          <img className="wheelbarrowImg" src={wheelbarrow} alt="wheelbarrow" />
        </div>
      </div>
    </div>
  </main>
);

// == PropTypes

VM.propTypes = {
  inventory: PropTypes.array.isRequired,
};

// == Export

export default VM;
