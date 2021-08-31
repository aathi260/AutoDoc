import React from "react";
import classes from "./about.module.css";
import Img1 from "./pic1.png";


const About = () =>
{
    return(
        <div>
            <div className={classes.about}>
    <div className={classes.one}>
      <h1 className={classes.title}>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
      <div className={classes.container}>
        <div className={classes.container1}>
          <div className={classes.card}>
            <div className={classes.cardtext}>
              <h1 className={classes.h1}>lorem ipsum</h1>
              <p className={classes.p1}>The first word, “Lorem,” isn't even a word; instead it's a piece of the word “dolorem,” meaning pain, suffering, or sorrow. ...</p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardtext}>
              <h1 className={classes.h1}>lorem ipsum</h1>
              <p className={classes.p1}>The first word, “Lorem,” isn't even a word; instead it's a piece of the word “dolorem,” meaning pain, suffering, or sorrow. ...</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.container1}>
          <div className={classes.card}>
            <div className={classes.cardtext}>
              <h1 className={classes.h1}>lorem ipsum</h1>
              <p className={classes.p1}>The first word, “Lorem,” isn't even a word; instead it's a piece of the word “dolorem,” meaning pain, suffering, or sorrow. ...</p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardtext}>
              <h1 className={classes.h1}>lorem ipsum</h1>
              <p className={classes.p1}>The first word, “Lorem,” isn't even a word; instead it's a piece of the word “dolorem,” meaning pain, suffering, or sorrow. ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.two}>
      <img className={classes.img} src={Img1} alt=""/>
      <h4 className={classes.h4}>Read our success story for inspiration</h4>
      <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
      <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      <button className={classes.button} type="button">Contact Us</button>
    </div>
  </div>
  <div className={classes.analytics}>
    <h1 className={classes.h1}>Analytics</h1>
    <iframe src='https://gfycat.com/ifr/RespectfulSlimyBunting' frameborder='0' scrolling='no' allowfullscreen width='640' height='412'></iframe>
    <p className={classes.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p className={classes.p2}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
  </div>
  </div>
        
    );
}

export default About;