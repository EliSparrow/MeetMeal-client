import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './component/login/login.js';
import Footer from './component/layout/footer.js';

function App() {
  return (
    <div className="App">
      <Login />
      <Footer/>
    </div>
  );
}

export default App;
