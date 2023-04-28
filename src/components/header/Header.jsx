import React from 'react';
import classes from './Header.module.css';

import data from './headerData';
import HeaderItems from '../headerItems/HeaderItems';

import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

   useEffect(() => {
     const timerId = setInterval(() => {
       setIndex(index + 1);
     }, 4000);

     return () => clearInterval(timerId);
   }, [index]);

  return (
    <header className={classes.wrapper}>
      {data.map((items, itemsIndex) => {
        let slidePosition = `${classes.nextSlide}`;
        if (itemsIndex === index) {
          slidePosition = `${classes.activeSlide}`;
        }
        if (
          itemsIndex === index - 1 ||
          (index === 0 && itemsIndex === data.length - 1)
        ) {
          slidePosition = `${classes.lastSlide}`;
        }
        return (
          <div
            className={`${classes.container} ${slidePosition}`}
            key={items.id}
          >
            <HeaderItems items={items} />
          </div>
        );
      })}
      <div className={classes.arrows}>
        <div
          className={classes.arrowLeft}
          onClick={() => setIndex(index - 1)}
        >
          <FaAngleLeft className={classes.arrowFont} />
        </div>
        <div
          className={classes.arrowRight}
          onClick={() => setIndex(index + 1)}
        >
          <FaAngleRight className={classes.arrowFont} />
        </div>
      </div>
    </header>
  );
}

export default Header
