import React from "react";
import classes from "./AccountBox.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcManager } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa";

const AccountBox = ({ isMobile }) => {
  return (
    <div
      className={`${classes.accountBox} ${
        isMobile && classes.mobileAccountBox
      }`}
    >
      <FcManager className={classes.accountIcon} />
      <span>account</span>
      <FaAngleDown size={20} />
    </div>
  );
};

export default AccountBox;
