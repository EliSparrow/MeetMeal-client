import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './component/layout/header.js'
import Footer from './component/layout/footer.js';
import Home from './component/home/home.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
