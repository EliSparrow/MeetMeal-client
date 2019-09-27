import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import './App.css';

import PrivateRoute from './component/rooter/privateRoute.js';
import PublicRoute from './component/rooter/publicRoute.js';

import ListUsers from './component/profile/ListUsers.js'
import Header from './component/layout/header.js'
import Footer from './component/layout/footer.js';
import Home from './component/home/home.js';
import Toggle from './component/toggleLogReg/toggle.js';
import UserProfile from './component/profile/userProfile.js';
import Register from './component/register/registerForm';
import Login from './component/login/loginForm.js';
import CreateEvent from './component/event/createEvent.js';
import ListEvents from './component/event/listEvent.js';
import ShowEvent from './component/event/showEvent.js';
// import TestFacebook from './component/TestFacebook';
import { EditProfile } from './component/profile/EditProfile.js';



function App() {
  return (
    <Router>
      <Route component={Header}></Route>
      <div id="content">
        <PrivateRoute restricted={false} component={EditProfile} exact path="/edituser"  ></PrivateRoute>
      {/* <PublicRoute restricted={false} component={TestFacebook} path="/testfacebook" exact /> */}
        <PublicRoute restricted={false} component={SearchBarHome} path="/" exact />
        <PublicRoute exact path="/toggle" component={Toggle}/>
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <PublicRoute restricted={true} exact path="/register" component={Register}/>
        <PrivateRoute exact path="/profile" component={UserProfile}></PrivateRoute>
        <PrivateRoute exact path="/ListUsers" component={ListUsers}></PrivateRoute>
        <PrivateRoute exact path='/create-event' component={CreateEvent}></PrivateRoute>
        <PrivateRoute exact path='/list-events' component={ListEvents}></PrivateRoute>
        <PrivateRoute exact path='/event/:eventId' component={ShowEvent}></PrivateRoute>
      </div>
      <Route component={Footer}></Route>
    </Router>
  );
}

export default App;
