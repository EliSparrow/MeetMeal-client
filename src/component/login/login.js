import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useState } from 'react';

import './login.css';

const Login = () => {
  return (
    <div class= 'container' >
      <form class= 'login'>
        <p> Hello world </p>
        <input placeholder='email'></input>
      </form>
    </div>
  )
}

export default Login;
