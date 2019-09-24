import React from 'react';
//import {BrowserRouter as Route} from 'react-router-dom';
import { Route, Link, Redirect } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

const useLoginForm = (event) => {

  const handleSubmit =  ( email, password) => {
    console.log(email, password);
    if (!email && !password) {
      alert('Les champs "email" et "mot de passe" sont manquants');
      return
    }
    console.log('ON VERIFIE LES CHAMPS ENTRÉS ', password, email);
    axios.post('http://localhost:1509/users/login',{
      email: email,
      password: password
      },
      console.log(password, email),
      console.log('axios sent')
    ).then(res => {
      sessionStorage.setItem('token', res.data.token);
      console.log(res);
      console.log('axios response');
      props.history.push('/')
      console.log('nouvelle url',url);
      return url
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.data.msg) {
        if (err.response.data.msg === 'Mot de passe invalide')
           alert('Mot de passe invalide')
        else if (err.response.data.msg === 'Utilisateur inconnu')
          alert('Utilisateur inconnu')
        else if (err.response.data.msg === 'Mot de passe necessaire')
          alert('Le champ "mot de passe" est manquant')
        else if (err.response.data.msg === 'Email necessaire')
          alert('Le champ "email" est manquant')
        else if (err.response.status === 500)
          alert('Nous sommes désolés, nous faisons face à un problème de serveur')
      }
    });
  }
console.log(url);
  return {
    handleSubmit,
    url
  };
}

const LoginForm = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {handleSubmit} = useLoginForm();
  console.log(email, password);

  return (
    <div className= 'container' >
      <form className= 'login' onSubmit={handleSubmit}>
        <h1>Log in : </h1>
        <div className='input'>
        <label className='email'>Your email : </label>
        <input placeholder='email' id='email' name='email' onChange={(event) => { setEmail(event.target.value) }} ></input>
        </div>

        <div className='input'>
        <label className='password'>Your password : </label>
        <input type='password' placeholder='password' name='password' id='password' onChange={(event) => { setPassword(event.target.value) }}></input>
        </div>

        <div className='button'>

          <Button type='submit' id='submit' > Log iiin </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
