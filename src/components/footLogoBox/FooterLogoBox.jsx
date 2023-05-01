import React from 'react';
import classes from './FooterLogoBox.module.css';
import logo from "../../assets/checkstall RED.png";

const FooterLogoBox = () => {
  return (
    <div className={classes.container}>
      <img src={logo} alt="logo" className={classes.logo} />
    </div>
  )
}

export default FooterLogoBox
