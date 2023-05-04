import React, { useState } from "react";
import classes from "./AccountBox.module.css";
import { FcManager } from "react-icons/fc";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AccountBox = ({ isMobile }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div
        className={`${classes.accountBox} ${
          isMobile && classes.mobileAccountBox
        }`}
        onClick={() => setOpen(!open)}
      >
        <FcManager className={classes.accountIcon} />
        <span>account</span>
        {open ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
      </div>
      <div className={`${classes.options} ${open && classes.openBox}`}>
        <span className={classes.option}>sign in</span>
        <span className={classes.option}>sign up</span>
      </div>
    </div>
  );
};

export default AccountBox;
