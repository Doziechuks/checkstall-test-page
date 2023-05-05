import React, { useRef } from 'react';
import classes from './Header.module.css';

import data from './headerData';
import HeaderItems from '../headerItems/HeaderItems';

import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Header = () => {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const timerIdRef = useRef(null);

  const handleMouseOver = () => {
    clearTimeout(timerIdRef.current);
  }
  const handleMouseOut =() => {
    timerIdRef.current = setTimeout(() => {
      handleSlider();
      setTimer(t => t + 1);
    }, 4000);
  }

  const handleSlider = () => {
    setIndex(index => {
      const lastIndex = data.length - 1;
      if (index < 0) {
       return setIndex(lastIndex);
      }
      if (index >= lastIndex) {
        return setIndex(0);
      }
      return index + 1;
    });
  }

   useEffect(() => {
    clearTimeout(timerIdRef.current);
    handleMouseOut()
   }, [timer])

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
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
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
