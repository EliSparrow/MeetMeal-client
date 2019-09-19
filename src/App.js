import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from './test.png';

import Login from './component/login/login.js';
import Header from './component/layout/header.js'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <img src={image} alt="test"/> */}
      <Login />
    </div>
  );
}

export default App;
