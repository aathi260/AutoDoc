import React from "react";
import { Route, Link } from "react-router-dom";
import classes from "./home.module.css";
import Login from "./Login";
import SignUp from "./SignUp";
import docDash from "./docDash";
import Front from "./Front";
import Footer from "./Footer";
import About from "./About";
import Patientdash from "./Patientdash";



const Home = () =>{
    return(
<div className={classes.body}>
        <nav className={classes.navbar}>
        <div className={classes.logo}>doc</div>
        <div className={classes.navlink}>
            <ul>
            <li><Link to="/" className={classes.a}>Home</Link></li>
            <li><Link to="/About" className={classes.a}>About</Link></li>
            <li><Link to="/Services" className={classes.a}>Services</Link></li>
            <li><Link to="/Login" className={classes.a}>Login</Link></li>
            <li><Link to="/SignUp" className={classes.a}>SignUp</Link></li>
            </ul>
        </div>
        </nav>
        <Route path="/" exact component={Front}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Docdash" exact component={docDash}/>
        <Route path="/Patientdash" exact component={Patientdash}/>
        <footer className={classes.bottom}>
         <Footer/>
        </footer>
    </div>
    );
}

export default Home;  