import React from 'react';
import classes from './HeaderItems.module.css'

const HeaderItems = ({ items }) => {
  const { title, imageUrl } = items;
  return (
    <main className={classes.container}>
      <div
        className={classes.background}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${imageUrl})`,
        }}
      />
      <h1 className={classes.title}>{title}</h1>
    </main>
  );
}

export default HeaderItems
