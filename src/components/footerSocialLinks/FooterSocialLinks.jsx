import React from 'react'
import classes from './FooterSocialLinks.module.css';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const FooterSocialLinks = ({isMobile}) => {
  return (
    <div className={`${classes.container} ${isMobile && classes.mobilewrapper}`}>
      <span className={classes.link}> <AiOutlineInstagram /></span>
      <span className={`${classes.link} ${classes.midLink}`}><AiOutlineTwitter /></span>
      <span className={classes.link}><AiFillLinkedin /></span>
    </div>
  );
}

export default FooterSocialLinks
