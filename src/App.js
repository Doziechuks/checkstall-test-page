import React, { useState } from 'react';
import classes from './App.module.css';
import HomePage from './pages/homePage/HomePage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { FaAngleUp } from 'react-icons/fa';

const App = () => {
   const [arrowScrollUp, setArrowScrollUp] = useState(false);
   const handleScroll = () => {
     if (window.scrollY >= 50) {
       setArrowScrollUp(true);
     } else {
       setArrowScrollUp(false);
     }
   };
   window.addEventListener("scroll", handleScroll);
   
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes.wrapper}>
      <div
        className={`${classes.arrowUpBox} ${arrowScrollUp && classes.arrowScroll}`}
        onClick={handleScrollTop}
      >
        <FaAngleUp className="arrowUp" />
      </div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App

