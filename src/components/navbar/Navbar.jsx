import React from "react";
import classes from "./Navbar.module.css";

import MiniNavbar from "../miniNavbar/MiniNavbar";
import MobileNav from "../mobileNav/MobileNav";

import LogoBox from "../logoBox/LogoBox";
import SearchBox from "../searchBox/SearchBox";
import SearchCategory from "../searchCategory/SearchCategory";

const Navbar = () => {
  return (
    <nav className={classes.wrapper}>
      <MiniNavbar />
      <main className={classes.container}>
        <LogoBox />
        <SearchBox />
        <SearchCategory />
      </main>
      <hr />
      <div className={classes.nav}>
        <span className={classes.option}>offers</span>
        <span className={classes.option}>promotions</span>
        <span className={classes.option}>buy for me</span>
        <span className={classes.option}>gather & ship for me</span>
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
