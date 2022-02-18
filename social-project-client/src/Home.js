import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import { Routes, Route, BrowserRouter} from "react-router-dom";


class Home extends Component {
  render() {
    

    return(
     
       <BrowserRouter>

            <Routes>
                <Route path="/" exact element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/profile" element={<Profile/>} />
                
            </Routes>
       </BrowserRouter>
          
           
          
             
     
                 
           
             
           
          
                  
     
                
               
          
            
       
    )
}
}

export default Home;