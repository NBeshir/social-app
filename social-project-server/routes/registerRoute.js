const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {check, validationResult } = require('express-validator');
//const config = require('config')
const bcrypt = require('bcrypt');





router.get('/register', (req,res, next)=>{
        User.find()
        .then(user=>{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);   
        })
        .catch(err => next(err));
   })
  
router.post(
    '/register', 
    [
    check('fname', "Please add your first name").not().isEmpty(),
    check('lname', "Please add your last name").not().isEmpty(),
    check('email', "Please include a valid email").isEmail(),
    check('password', "Please include a password with 6 or more characters").isLength({min: 6})
],
async (req, res)=>{
    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {fname,lname, email, password} = req.body;
    try{
   
       const doesExist = await User.findOne({email})
      
       if(doesExist){
           res.status(400).json({msg:'User already exists'});
          
       
       }
       //const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, 10)
     await User.create({
         fname:fname,
         lname:lname,
         email:email,
        password: hashedPassword

    })

    
      
res.json()
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');

    }


       
})


router.delete('/register',(req,res,next)=>{
User.findByIdAndDelete(req.id)
.then(user=>{
res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.json(user);   
})
.catch(err => next(err));
})


module.exports = router;