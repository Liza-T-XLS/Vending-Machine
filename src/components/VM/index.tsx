// == Imports

import React from 'react';

import './vm.scss';

import soda from '../../images/soda.svg';
import creditCard from '../../images/creditCard.svg';
import wheelbarrow from '../../images/wheelbarrow.svg';

// == Component

const VM = () => (
  <main>
    <div className="vm">
      <div className="left">
        <div className="sign">Vending-Machine</div>
        <div className="products">
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
          <div className="product">
            <img className="productImg" src={soda} alt="soda" />
            <div className="productId">001</div>
          </div>
        </div>
        <div className="pickupBox">Pick-up Box</div>
      </div>
      <div className="right">
        <div className="screen">
          <div className="instructions">
            <p className="message">Please select your product</p>
          </div>
          <div className="pad">
            <div className="padNumber">001</div>
            <div className="padNumber">002</div>
            <div className="padNumber">003</div>
            <div className="padNumber">004</div>
            <div className="padNumber">005</div>
            <div className="padNumber">006</div>
            <div className="padNumber">007</div>
            <div className="padNumber">008</div>
            <div className="padNumber">009</div>
          </div>
          <div className="selectedProduct">
            <img className="selectedProductImg" src={soda} alt="selected product" />
            <p className="unitLeft">3 units left</p>
          </div>
        </div>
        <div className="cardReader">
          <img className="creditCardImg" src={creditCard} alt="creditCard" />
        </div>
        <div className="refillButton">
          <img className="wheelbarrowImg" src={wheelbarrow} alt="wheelbarrow" />
        </div>
      </div>
    </div>
  </main>
);

// == Export

export default VM;
