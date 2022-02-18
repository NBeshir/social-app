import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import axios from 'axios';
import Register from './Register';
import Profile from './Profile';
import axios from 'axios';



class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
        user:{
          email:"",
     
          password:"",
        }
         ,
         
          
           isLoggedIn: false,
           posts:[]

        }
    }
    onChangeHandler =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
   

   
  loginUsers = async (e)=>{
        e.preventDefault()

    const {email, password} = this.state;
    
    
  const response = await fetch('http://localhost:5000/login',{
       method:'POST',
       headers:{
           'Content-Type':'application/json',
           
           
           
          
       },
       body:JSON.stringify({
           email,
           password
       })
   })
   
   const data = await response.json()
   
   if(data.user){
    //console.log(data.user)
   localStorage.setItem('token', data.user)
   alert('login successful')
   window.location.href ='/profile';
   
   }
else{
    
    alert('error')
}
   
}

  render() {
    
    return <div>
        <h1 className="m-5 form-header"> social connect</h1>
        <p className="m-2 form-par"> Where you connect with people</p>
             <div className = "formContainer " >
                    <form onSubmit={this.loginUsers}>
                        <h1>Log In</h1>
                      
                        <div className="inbox-container">
                            
                            <div className="emailBox"> 
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" className= "emailInput" onChange={this.onChangeHandler} required/>
                               
                            </div>
                           
                            <div className="passwordBox"> 
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" className= "passwordInput" onChange={this.onChangeHandler}  required/>
                            </div>
                           
                        </div>
                     
                       
                        <input type="submit"  className="loginButton btn btn-primary mt-5 "  value="Log In"/>
                        
                    </form>
                    <p> Don't have an account?</p>
                    <Link to = '/register'  className="registerButton btn btn-primary text-center">Register</Link>
         </div>          
                
    </div>;
  }
}

export default Login;