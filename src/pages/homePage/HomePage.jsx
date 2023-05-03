import React from 'react';
import classes from './Homepage.module.css';

import Header from '../../components/header/Header';
import Shop from '../../components/shop/Shop';

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Shop />
    </div>
  )
}

export default HomePage;
