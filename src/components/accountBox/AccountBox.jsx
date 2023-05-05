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
        <span>my checkstall</span>
        {open ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
      </div>
      <div className={`${classes.options} ${open && classes.openBox}`}>
        <span className={classes.option}>sign in</span>
        <span className={classes.option}>my recent purchase</span>
        <span className={classes.option}>orders</span>
        <span className={classes.option}>saved items</span>
        <span className={classes.option}>personal deals</span>
      </div>
    </div>
  );
};

export default AccountBox;
