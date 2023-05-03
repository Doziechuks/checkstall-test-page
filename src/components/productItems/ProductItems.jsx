import React from 'react';
import classes from './ProductItems.module.css';

const ProductItems = ({data}) => {
  const {imageUrl, name, price} = data;
  return (
    <div className={classes.wrapper}>
      <div className={classes.background}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={classes.productInfo}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>${price}</span>
      </div>
    </div>
  )
}

export default ProductItems
