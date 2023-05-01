import React from 'react';
import classes from './App.module.css';
import HomePage from './pages/homePage/HomePage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App

