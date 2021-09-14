// == Imports

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import prize from '../../../../images/prize.svg';
import onigiriCharacter from '../../../../images/onigiri-character.svg';
import tortilla from '../../../../images/tortilla.svg';

// == Component

type Props = {
  purchaseCounter: number,
};

const Ad = ({ purchaseCounter }: Props) => {
  const adClassName = classNames('ad', {rewardInfo: purchaseCounter === 3})
  return (
    <div className={adClassName}>
      {purchaseCounter !== 3 && (
        <>
          <div className="adLimited">
            <span className="limitedBanner">Limited edition</span>
            <img className="tortilla" src={tortilla} alt="tortilla"/>
            <span>New flavor!</span>
          </div>
          <div className="adReward">
            <span>Don't forget about our rewards program!<br/><br/>3 purchases<br/>=<br/><img className="prize" src={prize} alt="prize"/></span>
          </div>
          <div className="adOnigiri">
            <span>Have you tried our onigiri?<br/>They're delicious!</span>
            <img className="onigiriCharacter" src={onigiriCharacter} alt="onigiri character" />
          </div>
        </>
      )}
      {purchaseCounter === 3 && (
        <div className="adReward">
          <span>Rewards Program<br/><br/>Thank you for being our loyal customer!<br/><br/>An exclusive product is now available to you...</span>
        </div>
      )}
    </div>
  );
};

// == PropTypes

Ad.propTypes = {
  purchaseCounter: PropTypes.number.isRequired,
};

// == Export

export default Ad;