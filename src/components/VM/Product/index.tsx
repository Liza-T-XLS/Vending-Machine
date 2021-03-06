// == Imports

import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IProduct } from '../../../typings';

// == Component

type Props = {
  item: IProduct,
  selectedProduct: number,
  setSelectedProduct: (productId: number) => void,
};

const Product = ({ item, selectedProduct, setSelectedProduct }: Props) => {
  const itemVMId = item.id.toString().length === 1 ? `00${item.id}` : item.id;
  
  const productImgClassName = classNames('productImg', {selected: selectedProduct === item.id && window.matchMedia('(max-width: 767px)').matches}, {unavailable: selectedProduct === item.id && item.quantity === 0 && window.matchMedia('(max-width: 767px)').matches})

  const onSelectHandler = (event: MouseEvent<HTMLDivElement>): void => {
    const target = event.currentTarget as HTMLDivElement;
    if(window.matchMedia('(max-width: 767px)').matches) {
      setSelectedProduct(parseInt(target.id));
    }
  };
  return (
    <div className="product" id={item.id.toString()} onClick={onSelectHandler}>
      <img className={productImgClassName} src={item.productImg} alt="product" />
      <div className="productId">{itemVMId}</div>
    </div>
  );
};

// == PropTypes

Product.propTypes = {
  // item: PropTypes.object.isRequired,
  selectedProduct: PropTypes.number.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};

// == Export

export default Product;