import React from 'react';
import classes from './MiniNavbar.module.css';
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import AccountBox from '../accountBox/AccountBox';
import NavbarAuth from '../navAuth/NavbarAuth';

const MiniNavbar = () => {
  return (
    <nav className={classes.wrapper}>
      <main className={classes.container}>
        <div className={classes.authBox}>
          <NavbarAuth />
        </div>
        <div className={classes.navInfo}>
          <AccountBox />
          <div className={classes.cartBox}>
            <div className={classes.iconBox}>
              <AiOutlineShoppingCart className={classes.cartIcon} />
              <span className={classes.circle}>0</span>
            </div>
            <span className={classes.shop}>Shopping Cart</span>
          </div>
          <div className={classes.option}>
            home
            <span className={`${classes.underline} ${classes.active}`} />
          </div>
          <div className={classes.option}>
            about us
            <span className={classes.underline} />
          </div>
          <div className={classes.option}>
            favourites
            <span className={classes.underline} />
          </div>
          <div className={classes.option}>
            become a seller
            <span className={classes.underline} />
          </div>
          <div className={classes.option}>
            help center
            <span className={classes.underline} />
          </div>
        </div>

        {/* <div className={classes.contactBox}>
          <div className={classes.info}>
            <IoMdCall />
            <p>+234 980 939 3031</p>
          </div>
          <span>|</span>
          <div className={classes.info}>
            <AiOutlineMail />
            <p>support@checkstall.com</p>
          </div>
        </div> */}
      </main>
    </nav>
  );
}

export default MiniNavbar
