// == Imports

import React from 'react';

import { IProduct } from '../../../typings';

// == Component

type Props = {
  item: IProduct,
};

const Product = ({ item }: Props) => {
  const itemVMId = item.id.toString().length === 1 ? `00${item.id}` : item.id;
  return (
    <div className="product">
      <img className="productImg" src={item.productImg} alt="product" />
      <div className="productId">{itemVMId}</div>
    </div>
  );
};
// == Export

export default Product;