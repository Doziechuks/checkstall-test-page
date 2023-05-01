import React from 'react';
import classes from './FooterContacts.module.css';
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

const FooterContacts = () => {
  return (
    <div className={classes.container}>
      <span className={`${classes.info} ${classes.firstInfo}`}>
        {" "}
        <IoMdCall /> +234 980 939 3031{" "}
      </span>
      <span className={classes.info}>
        {" "}
        <AiOutlineMail /> support@checkstall.com{" "}
      </span>
    </div>
  );
}

export default FooterContacts
