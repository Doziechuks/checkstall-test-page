import React from 'react';
import classes from './Footer.module.css';
import FooterLogoBox from '../footLogoBox/FooterLogoBox';
import FooterSocialLinks from '../footerSocialLinks/FooterSocialLinks';
import FooterContacts from '../footerContacts/FooterContacts';
import FooterLinks from '../footerLinks/FooterLinks';



const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <FooterLogoBox />
      <div className={classes.container}>
        <FooterContacts />
        <FooterLinks
          title="About us"
          option={["our company", "help center", "offers", "promotions"]}
        />
        <FooterLinks
          title="Products"
          option={[
            "mens",
            "womens",
            "babies",
            "shoes",
            "accessories",
            "gadgets",
          ]}
        />
        <FooterSocialLinks />
      </div>
      <FooterSocialLinks isMobile />
      <hr />
      <p className={classes.right}>&copy; copyright Checkstall Technology Solution Limited 2023.</p>
    </footer>
  );
}

export default Footer
