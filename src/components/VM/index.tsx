// == Imports

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './vm.scss';

import Product from '../../containers/VM/Product';
import Screen from '../../containers/VM/Screen';
import CardReader from '../../containers/VM/CardReader';
import PickupBox from '../../containers/VM/PickupBox';
import RefillButton from '../../containers/VM/RefillButton';
import Instructions from '../../containers/VM/Instructions';

import { TInventory } from '../../typings';

// == Component

type Props = {
  inventory: TInventory,
  purchaseCounter: number,
  activateRewardsProgram: () => void,
  rewardsProgramStatus: boolean,
}

const VM = ({ inventory, purchaseCounter, activateRewardsProgram, rewardsProgramStatus }: Props) => {
  useEffect(() => {
    if (purchaseCounter === 3) {
      activateRewardsProgram();
    };
  }, [activateRewardsProgram, purchaseCounter]);
  
  return (
    <main>
      <div className="vm">
        <div className="left">
          <div className="sign">Lifesaver</div>
          <Instructions />
          {!rewardsProgramStatus && (
            <div className="products">
              {inventory.map((item) => (
                <Product key={item.id} {...item} />
              ))}
            </div>
          )}
          {rewardsProgramStatus && (
            <div className="products">
              {inventory.filter((item) => item.id !== 9)
              .map((item) => (
                <Product key={item.id} {...item} />
              ))}
            </div>
          )}
          <div className="mobileActionButtons">
            <CardReader />
            <RefillButton />
          </div>
          <PickupBox />
        </div>
        <div className="right">
          <Screen />
          <CardReader />
          <RefillButton />
        </div>
      </div>
    </main>
  );
};

// == PropTypes

VM.propTypes = {
  inventory: PropTypes.array.isRequired,
  purchaseCounter: PropTypes.number.isRequired,
};

// == Export

export default VM;
