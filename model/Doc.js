const mongoose=require('mongoose');

const docSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
        max:255
        
    },
    email: {
        type: String,
        required: true,
        max:255,
        min:6
    },
    desc:{
        type:String,
        required: true,
        max: 1024,
        min:6
    },
    med:{
        type:String,
        required:true,
        max:1000,
        min:1
            
    },
    date:{
        type: Date,
        default:Date.now
    }
});


module.exports=mongoose.model('Doc', docSchema);