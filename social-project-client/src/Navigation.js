import React from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { Link} from "react-router-dom";

const  Navigation = () => {

return (
<div>

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
              <div>
                  <a className="navbar-brand" href="#"><span>SC</span></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  
                      <input type="text" value="Search SC" className="search text-center" />
                      <a className="nav-link search-icon" aria-current="page" href="#"><FontAwesomeIcon icon="search" size="sm"  /></a>
              </div>
          
          {/*<div className="collapse navbar-collapse" id="navbarNav">*/}
              <div>
                      
                          <div>
                              <ul className="navbar-nav">

                                    
                                              <li className="nav-item">
                                                      <a className="nav-link" href="#"><FontAwesomeIcon icon="home" size="lg"  /></a>
                                              </li>
                                              <li className="nav-item">
                                                      <a className="nav-link" href="#"><FontAwesomeIcon icon="user-friends" size="lg"/></a>
                                              </li>

                                      
                                    
                                              <li className="nav-item">
                                                    <Link to="/" className="nav-link signout"><FontAwesomeIcon icon="sign-out-alt" size="lg"/></Link>
                                            </li>
                                            
                                
                                

                              </ul>
                          </div>
                          <div>
                              <ul>
                                
                              </ul>
                    
                          </div>

                      </div>
                  
                  
                      
              
                

              
            
        
        </div>
      </nav>
      
 

  </div>
)

      
     
   
}

export default Navigation;