import React,{useState} from "react";
import classes from "./doc.module.css";
import axios from 'axios';





const Docdash = () =>{
    const [doc,setDoc] = useState({name: "",email:"",desc : "",med:"" });
 

  const onChange = e =>{
      setDoc({...doc,[e.target.name] : e.target.value});
  }
    
  const onSubmit = e =>{
    
    console.log(doc);
      e.preventDefault();
      axios.post('http://localhost:5000/api/user/Docdash',doc).then(data=>{
          console.log(data);
          if(data.status !== 400)
          {
            console.log("prescription posted");
            // setInterval(() => {
            //   console.log('Interval triggered');
            // }, 1000);
             window.alert("Prescription posted!!");
          }
          else {
            console.log("error");

          }
        });
      }
    return(
            <div className={classes.body}>
                        <div className={classes.container}>
                            <div className={classes.card}>
                            <div className={classes.cardtext}>

                                <form name="f1" onSubmit={onSubmit}>
                                <center>
                                    <h1> Prescription</h1>
                                    <table className={classes.docform}>
                                    <tr>
                                        <td>Name of Patient</td>
                                        <td><input type="text" name="name" id="uname" onChange={onChange} /></td>
                                    
                                    </tr>
                                    <tr>
                                        <td>Sex</td>
                                        <td><input TYPE="RADIO" NAME="M" VALUE="Male"/>MALE</td>
                                        <td><input TYPE="RADIO" NAME="F" VALUE="FEMALE"/>FEMALE</td>
                                    </tr>
                                    <tr>
                                        <td>Email-ID</td>
                                        <td><input type="text" name="email" id="mailid" onChange={onChange} /></td>
                                    
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td><textarea id="add" name="desc" rows="4" cols="50" onChange={onChange}></textarea></td>
                                    
                                    </tr>
                                    <tr>
                                        <td>Medicines</td>
                                        <td><textarea id="add" name="med" rows="4" cols="50" onChange={onChange}></textarea></td>
                                        
                                    </tr>
                                    
                                    <tr>
                                        <td></td>
                                        <td><input type="Submit" id="submit"/></td>
                                        
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



export default Docdash;
