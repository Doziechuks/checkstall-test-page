import React, { useState } from "react";
import classes from "./LogoBox.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/checkstall RED.png";

const LogoBox = ({ isMobile }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${classes.logoBox} ${isMobile && classes.mobileLogoBox}`}>
      <div className={classes.menu} onClick={() => setOpen(true)}>
        <AiOutlineMenu className={classes.menuIcon} />
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={`${classes.container} ${open && classes.show}`}>
        <div className={classes.closeBox}>
          <AiOutlineClose
            className={classes.close}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.content}>
          <div className={classes.option} onClick={() => setOpen(false)}>
            about us
          </div>
          <hr />
          <div className={classes.option} onClick={() => setOpen(false)}>
            help center
          </div>
          <hr />
          <div className={classes.option} onClick={() => setOpen(false)}>
            products
          </div>
          <hr />
          <div className={classes.option} onClick={() => setOpen(false)}>
            promotions
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBox;
