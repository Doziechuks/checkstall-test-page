import React from 'react';
import classes from './NavbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.authBox}>
        <span className={classes.text}>Log in</span>
        <span>|</span>
        <span className={classes.text}>Sign up</span>
      </div>
    </div>
  );
}

export default NavbarAuth
