import React from "react";
import classes from "./footer.module.css";

const Footer = () =>{
    return(
        <section id="contact">
    <div className={classes.footer}>
      <div className={classes.contain}>
        <div className={classes.col}>
        
          <h1 className={classes.h1}>Doctor</h1>
          <ul className={classes.ul}>
            <li className={classes.li}>About</li>
            <li className={classes.li}>Services</li>
            <li className={classes.li}>Social</li>
            <li className={classes.li}>Get in touch</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h1 className={classes.h1}>Patients</h1>
          <ul className={classes.ul}>
            <li className={classes.li}>About</li>
            <li className={classes.li}>Services</li>
            <li className={classes.li}>Social</li>
            <li className={classes.li}>Get in touch</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h1 className={classes.h1}>Accounts</h1>
          <ul className={classes.ul}>
            <li className={classes.li}>About</li>
            <li className={classes.li}>Services</li>
            <li className={classes.li}>Social</li>
            <li className={classes.li}>Get in touch</li>
          </ul>
        </div>
        <div className={classes.col}>
          <h1 className={classes.h1}>Accounts</h1>
          <ul className={classes.ul}>
            <li className={classes.li}>Contact us</li>
            <li className={classes.li}>Web chat</li>
            <li className={classes.li}>Open ticket</li>
          </ul>
        </div>
       
        <div className={classes.clearfix}></div>
      </div>
    </div>
  </section>
    );
}

export default Footer;