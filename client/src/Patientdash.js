import React from "react";
import classes from "./pat.module.css";



const PatientDash = () =>{
return(
    <div className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.card}>
                    <div className={classes.cardtext}>

                        <form name="f1" >
                        <center>
                            <h1> Prescription</h1>
                            <table className={classes.docform}>
                        
                            <tr>
                                <td>Email-ID</td>
                                <td><input type="text" name="email" id="mailid"  /></td>
                            
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><textarea id="add" name="desc" rows="4" cols="50" ></textarea></td>
                            
                            </tr>
                            <tr>
                                <td>Medicines</td>
                                <td><textarea id="add" name="med" rows="4" cols="50" ></textarea></td>
                                
                            </tr>
                            
                            <tr>
                                <td></td>
                                <td><input type="Submit" id="submit" value="Order"/></td>
                                
                            </tr>
                            </table>

                        </center>
                        </form>

                    </div>
                    </div>
                </div>
                
    </div>

);
}

export default PatientDash;
