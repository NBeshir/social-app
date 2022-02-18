const express = require('express');
const registerRoute = require('./routes/registerRoute');
const login = require('./routes/Login');
const profile = require('./routes/profile')
//const logoutRoute = require('./routes/logout');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}));
app.use('/', login);
app.use('/', profile);
app.use('/', registerRoute);
//app.use('/', logoutRoute);

const port = process.env.PORT || 5000;

const db = require('config').mongoUri;
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
        
})
.then(()=>console.log('Mongodb connected...'))

.catch(err =>console.log(err))



app.listen(port ,() => {
    console.log(`server is running on port ${port}`)
})