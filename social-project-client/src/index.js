import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUser,faUserCircle,faEnvelope, faHome, faUserFriends,faSearch, faSignOutAlt, faThumbsUp, faComment, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
library.add(faUser,faUserCircle,faEnvelope,faHome,faUserFriends,faSearch,faSignOutAlt, faThumbsUp, faComment,faEllipsisH)

ReactDOM.render(
 
    <App />
 ,
  document.getElementById('root')
);



