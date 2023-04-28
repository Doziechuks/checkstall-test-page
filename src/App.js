import React from 'react';
import classes from './App.module.css';
import HomePage from './pages/homePage/HomePage';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      {/* <HomePage /> */}
    </div>
  )
}

export default App

