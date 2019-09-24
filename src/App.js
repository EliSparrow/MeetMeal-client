import React from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './component/layout/header.js'
import Footer from './component/layout/footer.js';
import Home from './component/home/home.js';

import UserProfile from './component/profile/userProfile.js';
import Register from './component/register/registerForm';
import Login from './component/login/loginForm.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={Header}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/profile" component={UserProfile}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route component={Footer}></Route>
      </div>
    </Router>
  );
}

export default App;
