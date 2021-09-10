// == Imports

import React from 'react';
import PropTypes from 'prop-types';

import { IProduct } from '../../../typings';

// == Component

type Props = {
  item: IProduct,
};

const Product = ({ item }: Props) => (
  <div className="product">
    <img className="productImg" src={item.productImg} alt="product" />
    <div className="productId">{`00${item.id}`}</div>
  </div>
);

// PropTypes

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productImg: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
}

// == Export

export default Product;