import React from "react";
import classes from "./LogoBox.module.css";
import logo from "../../assets/checkstall RED.png";

const LogoBox = ({ isMobile }) => {
  return (
    <div className={`${classes.logoBox} ${isMobile && classes.mobileLogoBox}`}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default LogoBox;
