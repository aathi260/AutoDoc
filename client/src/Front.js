import React from "react";
import Img from "./logo3.png";
import classes from "./home.module.css";
const Front = () =>{
    return(
        <div id="home">
        <div class={classes.homepage}>
          <img className={classes.img} src={Img} alt=""/>
        </div>
        </div>
    );
}

export default Front;