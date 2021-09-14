// == Imports

import React, { MouseEvent } from 'react';

import { IProduct } from '../../../typings';

// == Component

type Props = {
  item: IProduct,
  setSelectedProduct: (productId: number) => void,
};

const Product = ({ item, setSelectedProduct }: Props) => {
  const itemVMId = item.id.toString().length === 1 ? `00${item.id}` : item.id;

  const onSelectHandler = (event: MouseEvent<HTMLDivElement>): void => {
    const target = event.currentTarget as HTMLDivElement;
    if(window.matchMedia('(max-width: 460px)').matches) {
      setSelectedProduct(parseInt(target.id));
    }
  };
  return (
    <div className="product" id={item.id.toString()} onClick={onSelectHandler}>
      <img className="productImg" src={item.productImg} alt="product" />
      <div className="productId">{itemVMId}</div>
    </div>
  );
};
// == Export

export default Product;