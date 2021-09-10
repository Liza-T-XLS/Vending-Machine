// == Imports

import React from 'react';

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

// == Export

export default Product;