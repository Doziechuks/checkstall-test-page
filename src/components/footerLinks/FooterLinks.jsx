import React from 'react';
import classes from './FooterLinks.module.css';

const FooterLinks = ({title, option}) => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>{title}</h3>
      {
        option.map((item, index) => (
          <div className={classes.link} key={index}>{item}</div>
        ))
      }
    </div>
  )
}

export default FooterLinks
