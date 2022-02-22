import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';


 class Profile extends Component {
    constructor(){
        super()
        this.state = {
            fname:"",
            lname:"",
            friends:[],
              
            profileImages :[],
            post:[],
            tempPost:[],
            isLoggedIn:false

            }
    }
    async componentDidMount(){
      
      //when the component counts, everything saved as a profile will be displayed
      
      const token = localStorage.getItem('token');
      if(token){
        const user = jwt.decode(token)
       if(!user){
         localStorage.removeItem('token')
         alert('no token')
       // window.location.href ='/login';
       }else{
        const req = await fetch ('http://localhost:5000/profile',{
                headers:{
                 // Authorization: 'Bearer ' + localStorage.getItem('token')
                 
                  "x-auth-token": localStorage.getItem('token')
                }
              })
          const data = await req.json()
              if(data){
               // data.map(d=>{
                  this.setState({post:data.post, fname:data.fname,lname:data.lname})
                  //this.setState({username:})
           
               
              }
              else{
                alert(data.error)
              }
       }
      }
      
      }
    onChangePost =(e)=>{
//this.setState({[e.target.name]: e.target.value})
this.setState({tempPost:e.target.value})

    }
   
    onSubmitPost = async (e)=>{
e.preventDefault();
const req = await fetch('http://localhost:5000/profile', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				post: this.state.tempPost,
			}),
		})

		const data = await req.json()
		if (data) {
			this.setState({post:[ this.state.tempPost,...this.state.post]})
			this.setState({tempPost:''})
		} else {
			alert(data.error)
		}

    }

    
  render() {

    const fname = this.state.fname.charAt(0).toUpperCase() + this.state.fname.slice(1);
    const lname = this.state.lname.charAt(0).toUpperCase() + this.state.lname.slice(1);

    const post = this.state.post.map((po, id)=>{
      return (<div key={id} className="container wall-post mt-5 ">
                  <div className="row justify-content-md-center icons-row">

                                <div className="icons  ">
                                  <div className="users-icon">
                                      <FontAwesomeIcon className="user-icon mt-3" icon="user" size="lg"  color="#848482"/>
                                          <span className="mt-3 username">{fname} {lname}</span>
                                          <a href=""><FontAwesomeIcon  className="three-dots" icon="ellipsis-h" color="#848482"/> 
                                          </a>
                                  </div>
                                      
                                  </div>
                                  <div className="">
                                        <p className="mt-5 post-added">{po}</p><hr/>
                                        <li className="post-comment">
                                              <a className="p-5 "><FontAwesomeIcon icon="thumbs-up" size="lg" color="#585858"/></a>
                                              <a><FontAwesomeIcon icon="comment" size="lg"  color="#585858"/></a><hr/>
                                              <li className="comment-on-post">
                                                    <a><FontAwesomeIcon className="user-icon mt-3" icon="user" size="lg" color="#848482" /> </a>
                                                    <input type="text" className="text-center post-input mt-4 w-75 " placeholder="Write a comment"/>
                                              </li>
                                            
                                        </li>
                                  </div>
                  
                  </div>
                          

                  </div>
           
                  
     
            
      )
   })
      return (
   
   
        <div className="profile-container ">
            <Navigation/>
            <div className="">

                <form onSubmit={this.onSubmitPost} className="profile-wall mx-auto">
                  
                      <input type="text" 
                              className="text-center post-input" 
                              value={this.state.tempPost} 
                              placeholder= {`What's on your mind , ${fname} ?`}
                              onChange={this.onChangePost}
                              /> <hr/>
                        <input type="submit" value="Post" className="btn btn-primary mt-3 mx-auto post-button" />
                    </form>
            </div>
            
              
                
               
            
             
                <div className='col-5 col mx-auto' >
                  <p> {post}</p>
                </div>
               
            </div>
           
           )
}
 }
export default Profile;
