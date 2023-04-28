import React from 'react';
import classes from './MiniNavbar.module.css';
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const MiniNavbar = () => {
  return (
    <nav className={classes.wrapper}>
      <main className={classes.container}>
        <div className={classes.info}>
          <IoMdCall />
          <p>+234 980 939 3031</p>
        </div>
        <span>|</span>
        <div className={classes.info}>
          <AiOutlineMail />
          <p>support@checkstall.com</p>
        </div>
      </main>
    </nav>
  );
}

export default MiniNavbar
