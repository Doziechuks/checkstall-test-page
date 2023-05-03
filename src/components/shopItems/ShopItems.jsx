import React from 'react';
import classes from './ShopItems.module.css'
import ProductItems from '../productItems/ProductItems';

const ShopItems = ({item}) => {
  const {title, items} = item;
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      <div className={classes.productsContainer}>
      {
        items.map(data => {
          return <ProductItems key={data.id} data={data} />
        } )
      }
      </div>
    </div>
  );
}

export default ShopItems
