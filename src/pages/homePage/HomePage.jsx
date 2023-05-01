import React from 'react';
import classes from './Homepage.module.css';

import Header from '../../components/header/Header';

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
    </div>
  )
}

export default HomePage;
