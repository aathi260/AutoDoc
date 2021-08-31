import React,{useState} from 'react';
import classes from "./login.module.css";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';




const Login = (props) => {
  const [user,setUser] = useState({email:"",password : ""});
 

  const onChange = e =>{
      setUser({...user,[e.target.name] : e.target.value});
  }
    
  const onSubmit = e =>{
    
    console.log(user);
      e.preventDefault();
      axios.post('http://localhost:5000/api/user/login',user).then(data=>{
          console.log(data);
          if(data.status !== 400)
          {
            if(data.status !== 400)
          {
            console.log("Logged in");
            // console.log(data.data);
            // setInterval(() => {
            //   console.log('Interval triggered');
            // }, 1000);
           if(data.data==='Doctor') 
           { props.history.push('/Docdash');}
           if(data.data==='Patient')
           {
             props.history.push('/Patientdash')
           }
          }
          }
          else {
            console.log("Invalid");

          }
        });
      }
  return (
    
    <Form className={classes.borderform} onSubmit={onSubmit}>
    <h1 className={classes.Login}>Login</h1>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email!" onChange={onChange} className={classes.email} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={onChange} className={classes.email} />
      </FormGroup>
      
      <Button className={classes.subbut} type="submit">Submit</Button>
      
    </Form>
    
  );
}

export default Login;