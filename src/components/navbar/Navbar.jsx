import React from "react";
import classes from "./Navbar.module.css";

import MiniNavbar from "../miniNavbar/MiniNavbar";
import MobileNav from "../mobileNav/MobileNav";

import LogoBox from "../logoBox/LogoBox";
import SearchBox from "../searchBox/SearchBox";
import AccountBox from "../accountBox/AccountBox";

const Navbar = () => {
  return (
    <nav className={classes.wrapper}>
      <MiniNavbar />
      <main className={classes.container}>
        <LogoBox />
        <SearchBox />
        <AccountBox />
      </main>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
