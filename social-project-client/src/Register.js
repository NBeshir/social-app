import React, { Component } from 'react';
import { Link} from "react-router-dom";
import Login from "./Login";

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{

                fname:"",
                lname:"",
                email:"",
                password:"",
            }
            
           
         

        
    }
}
    onChangeHandler =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


  registerUser = async (e)=>{
    e.preventDefault();
     
    
     const {fname, lname ,email, password} = this.state;
  

  const response = await fetch("http://localhost:5000/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
           fname,
           lname,
            email,
            password
        })
       
    })
   
    const data = await response.json()
    
    if(data){
      //this.setState({[e.target.name]:""})
       //window.location.href = '/';

       return <Login />
    }
     }

     
render() {

    const {fname, lname ,email, password} = this.state;
    return <div>
             <div className = "formContainer">
                    <form onSubmit={()=>this.registerUser()}>
                        <h1>Register</h1>
                        <div className="inbox-container">
                            <div className="userBox">
                                <label htmlFor="fname">First Name</label>
                              
                                <input type="text" name="fname" value={fname} className= "userInput"  onChange={this.onChangeHandler} required/>
                        
                            </div>
                            <div className="lnameBox">
                                <label htmlFor="lname">Last Name</label>
                              
                                <input type="text" name="lname" value={lname} className= "userInput"  onChange={this.onChangeHandler} required/>
                        
                            </div>
                            <div className="emailBox"> 
                                <label htmlFor="email">Email</label>
                               
                                <input name="email" type="email" value={email} className= "userInput"  onChange={this.onChangeHandler}  required/>
                              
                            </div>
                            <div className="passwordBox"> 
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" value={password} className= "passwordInput"  onChange={this.onChangeHandler} required/>
                            </div>
                           
                          
                        </div>
                        <input type="submit" className="loginButton" value="Register" /> 
                        
                    </form>
                    <p> Already have an account?</p>
                    <Link to="/" className="registerButton">Login</Link>
                   
                    </div>
                
    </div>;
  }
}

export default Register;