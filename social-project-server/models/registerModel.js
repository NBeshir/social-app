const mongoose = require('mongoose');
const Schema = mongoose.Schema; //making shorthand to the mongoose.schema function, so we can refer to it as schema instead of mongoose.schema

//require('mongoose-currency').loadType(mongoose);    //loads currency type into mongoose
//const Currency = mongoose.Types.Currency;   //shorthand for mongoose.TYpes.Currency




const registerSchema = new Schema({ //instantiates new object named campsiteSchema

  
    username:{
        type: String,
        required: true, //document requires a name property
        unique: true 
    
   },
   email: {
        type: String,
        required: true, //document requires a name property
        unique: true    //name must be unique
    },
    password:{
        type: String,
        required: true, 

  }
},
{

    timestamps: true    //timestamps - causes mongoose to add two properties to the schema called createdAt and updatedAt
});


//create model, Campsite, for the data
const User = mongoose.model('user', registerSchema);

module.exports = User;