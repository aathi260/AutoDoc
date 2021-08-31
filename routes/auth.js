const router = require('express').Router();
const User=require('../model/User');
const Doc=require('../model/Doc');
const bcrypt=require('bcryptjs');
const { registerValidation,loginValidation,doctorValidation} = require('../validation');



//Register
router.post('/register', async (req,res) =>{
   //basic validation
    const {error}=registerValidation(req.body);
   
   if(error) return res.status(400).send(error.details[0].message);

    //unique email validation
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('This email aldready exsist');
    //Hashing the pass

    const salt = await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(req.body.password, salt);

   //new user
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        role:req.body.role
    });
    try{
        const savedUser= await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
 });

 //login
 router.post('/login', async (req,res) =>{
     //basic validation
    const {error}=loginValidation(req.body);
   
    if(error) return res.status(400).send(error.details[0].message);

    //email validation
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Invalid email');

    //password validation
    const validPass= await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    res.send(user.role);
 });
 //DocDash
 router.post('/Docdash', async (req,res) =>{
     //basic validation
    const {error}=doctorValidation(req.body);
   
    if(error) return res.status(400).send(error.details[0].message);

     //new prescription
     const doc= new Doc({
        name:req.body.name,
        email:req.body.email,
        desc:req.body.desc,
        med:req.body.med
    });
    try{
        const savedUser= await doc.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
 });


   




module.exports = router;
