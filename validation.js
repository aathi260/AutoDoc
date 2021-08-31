const Joi=require('@hapi/joi');
//Reg validation
 const registerValidation= (data) => {
const schema = Joi.object( {
    name: Joi.string().min(1).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    role: Joi.string().min(1).required()
});
return schema.validate(data);
};

//login validation
const loginValidation= (data) => {
    const schema = Joi.object( {
        
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
    };

//Doc validation
const doctorValidation= (data) => {
    const schema = Joi.object( {
        name: Joi.string().min(1).required(),
        email: Joi.string().min(6).required().email(),
        desc: Joi.string().min(1).required(),
        med: Joi.string().min(1).required()
    });
    return schema.validate(data);
    };


module.exports.registerValidation= registerValidation;
module.exports.loginValidation= loginValidation;
module.exports.doctorValidation= doctorValidation;