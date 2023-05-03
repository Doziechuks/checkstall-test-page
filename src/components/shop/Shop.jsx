import React from 'react';
import classes from './Shop.module.css';
import { productsData } from './shopData';
import ShopItems from '../shopItems/ShopItems';

const Shop = () => {
  return (
    <section className={classes.wrapper}>
      {
        productsData.map(item => {
          return <ShopItems key={item.id} item={item} />
        })
      }
    </section>
  )
}

export default Shop
