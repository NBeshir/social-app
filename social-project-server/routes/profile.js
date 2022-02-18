const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const config = require('config')

const jwt = require('jsonwebtoken');

const { findById } = require('../models/User');

router.delete('/profile/i',async (req,res)=>{
    const user = await User.deleteMany()

   
       res.json({user})
      
 


})
router.get('/profile', async (req, res)=>{
    const token = req.headers['x-auth-token'];
    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        const email = decoded.email
        //req.user= decoded
       
        const user = await User.findOne({
           email:email,
        
        })
       
       //console.log('user',user)
        return res.json({post:user.post, fname:user.fname, lname:user.lname})
    }
        catch (error) {
            console.log(error)
            res.json({ status: 'error', error: 'invalid token' })
        }

}) 


router.post('/profile', (req, res)=>{
   
    const token = req.headers['x-auth-token'];
  
        const decoded =   jwt.verify(token, config.get('jwtSecret'))
       
        const email = decoded.email
       const  newPost=req.body.post
       let arr= []
       const id= decoded._id
        //const username = decoded.username
      



User.findOne({email})
.then(user =>{
    if(user){
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        user.post.push(newPost)
       user.save()
        return res.json(user);    //send

    }else{
        res.status(404).json('user not found')
    }

})




})
  
  
 


module.exports = router;