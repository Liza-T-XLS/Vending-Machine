// == Imports

import React from 'react';

import './miniScreen.scss';

import prize from '../../../images/prize.svg';

// == Component

const MiniScreen = () => {

  return (
    <div className="miniScreen">
      <div className="adReward">
        <span>3 purchases<br/>=<br/><img className="prize" src={prize} alt="prize"/></span>
      </div>
    </div>
  );
};

// == Export

export default MiniScreen;