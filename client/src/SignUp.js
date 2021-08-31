import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import classes from "./signup.module.css";
import axios from 'axios';

const SignUp = (props) => {
  const [user,setUser] = useState({name: "",email:"",password : "",role:"" });
 

  const onChange = e =>{
      setUser({...user,[e.target.name] : e.target.value});
  }
    
  const onSubmit = e =>{
    
    console.log(user);
      e.preventDefault();
      axios.post('http://localhost:5000/api/user/register',user).then(data=>{
          console.log(data);
          if(data.status !== 400)
          {
            console.log("user created");
            // setInterval(() => {
            //   console.log('Interval triggered');
            // }, 1000);
             props.history.push('/Login');
          }
          else {
            console.log("registration error");

          }
        });
      }
  return (
    
    <Form className={classes.borderform} onSubmit={onSubmit}>
    <h1 className={classes.Login}>SignUp</h1>
        <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="text" name="name" id="exampleEmail" placeholder="Enter Your Name!" className={classes.email} onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your Email!" className={classes.email} onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" className={classes.email} onChange={onChange} />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleSelect" name="role" onChange={onChange}>Role</Label>
        <Input type="select" name="role" id="exampleSelect"  className={classes.email} onChange={onChange}>
          <option>--</option>
          <option>Doctor</option>
          <option>Patient</option>
          <option>Medicine Suplier</option>
         
        </Input>
      </FormGroup>

      
      <Button className={classes.subbut} type="submit">Submit</Button>
      
    </Form>
    
  );
}

export default SignUp;