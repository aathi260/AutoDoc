const express=require('express');
const app = express();
const dotenv=require('dotenv');
const mongoose= require('mongoose');
//import routes
const authRoute=require('./routes/auth');
const cors = require('cors');

dotenv.config();
  
app.use(cors());


//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true,useUnifiedTopology: true},() =>
console.log("connected to db"));

//middlewares
app.use(express.json());

 //route middlewares
 app.use('/api/user',authRoute);



app.listen(5000, () => console.log("server running"));