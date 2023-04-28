import React from 'react';
import classes from './MobileNav.module.css';

import LogoBox from '../logoBox/LogoBox';
import SearchBox from '../searchBox/SearchBox';
import AccountBox from '../accountBox/AccountBox';

const MobileNav = () => {
  return (
    <nav className={classes.wrapper}>
      <div className={classes.logoConatiner}>
        <LogoBox isMobile />
        <AccountBox isMobile />
      </div>
      <SearchBox isMobile />
    </nav>
  )
}

export default MobileNav
