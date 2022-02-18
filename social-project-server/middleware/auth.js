const jwt = require('jsonwebtoken');
const config = require('config');

 async function auth(req,res,next){
//get token from header

//const token = req.header('authorization');
const token = req.header('x-auth-token');

// check if not token
if(!token){
    return res.status(401).json({msg: 'No token, authorization denied!'})
}
try{
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    //console.log(decoded)
    //add user from payload
    req.user = decoded //pulling out the payload and set the user in the payload to req.user so we can have access to it in the route
    next();
}catch(err){
    res.status(401).json({msg:'Token is not valid!'})
}
}

module.exports = auth;