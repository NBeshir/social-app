const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const config = require('config')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/login', async (req,res)=>{
  //toke is passed to the header so we ca access the payload from there as req.user
 try{
   const user = await User.findById(req.user.id).select('-password'); //req.user.id-accessing the payload, because we assiged it to req.user in the auth middleware//avoiding password
   res.json(user)
 }catch(err){
   console.log(err.message);
   res.status(500).json({msg:'Server Errorr!'})
 }
}) 

router.post('/login',[
  check('email','Please inter the correct email ').isEmail(),
  check('password','password is required').exists()
], async (req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  
  const {email, password} = req.body;

  
    let user = await User.findOne({email})
    //console.log(user)
    if(!user){
      return res.status(400).json({msg: "Invalid credentials"})

     
    }
    const isMatch = await bcrypt.compare(password, user.password)
    //console.log(password, user.password)
   // console.log(isMatch)
    if(isMatch){
      
    
  const token = jwt.sign({
    // username:user.username,
    //id:user._id,
     email:user.email
   }, 
    config.get('jwtSecret'),
   {
     expiresIn:"1d"
   },
   
   )
 
    return res.json({status:"ok", user: token})
    
       
     
   }
   else{
    return res.status(400).json({user:false})
   }
 
   
  })


module.exports = router;