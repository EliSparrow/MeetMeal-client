import React from 'react';
//import ReactDOM from 'react-dom'

import useLoginForm from './loginCustomHooks.js';

const LoginForm = (callback) => {
//  const [inputs, setInputs] = useState({});
  const {inputs, handleInputChange, handleSubmit} = useLoginForm();

  return (
    <div className= 'container' >
      <form className= 'login' onSubmit={handleSubmit}>
        <h1>Log in : </h1>
        <div className='input'>
        <label className='email'>Your email : </label>
        <input placeholder='email' id='email' name='email' onChange={handleInputChange} value={inputs.email} ></input>
        </div>

        <div className='input'>
        <label className='password'>Your password : </label>
        <input type='password' placeholder='password' name='password' id='password' onChange={handleInputChange} value={inputs.password}></input>
        </div>

        <div className='button'>
        <button type='submit' id='submit'>Log in !</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
