// import React from 'react';
// import { Route } from 'react-router-dom';
// import {useState} from 'react';
// import axios from 'axios';
//
// const submitLogin = (email, password, props, event) => {
//   console.log(email, password);
//
//   if (!email || !password)
//     checkInputs();
//
//   axios.post('http://localhost:1509/users/login', {
//     email: email,
//     password: password
//   }).then( res => {
//     console.log(res);
//     sessionStorage.setItem('token', res.data.token);
//     props.history.push('/');
//   }).catch( error => {
//     if (error.response.data.msg){
//       if (error.response.data.msg === 'Mot de passe invalide')
//         alert('Mot de passe invalide')
//       else
//         alert('Utilisateur inconnu')
//     }
//     console.log(err.response);
//     alert('Nous sommes désolés, nous faisons face à un problème de serveur')
//   })
// }
//
// const changeInputs = (event) => {
//   event.persist();
//   setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
// }
//
// const checkInputs = (event) => {
//   if (!inputs.email && !inputs.password)
//     return alert('Les champs "email" et "mot de passe" sont manquants');
//   else if (!inputs.email)
//     return alert('Le champ "email" est manquant');
//   else if (!inputs.password)
//     return alert('La champ "mot de passe" est manquant');
//   else
//     return
// }
//
// const LoginForm2 = props => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//
//   return (
//     <div className= 'container' >
//       <form className= 'login' onSubmit={handleSubmit}>
//         <h1>Log in : </h1>
//         <div className='input'>
//         <label className='email'>Your email : </label>
//         <input placeholder='email' id='email' name='email' onChange={(evt) => { setEmail(evt.target.value) }} ></input>
//         </div>
//
//         <div className='input'>
//         <label className='password'>Your password : </label>
//         <input type='password' placeholder='password' name='password' id='password' onChange={(evt) => { setPassword(evt.target.value) }}></input>
//         </div>
//
//         <div className='button'>
//         <Route render={({ history }) => (
//           <button type='submit' id='submit' onClick={() => handleSubmit(history, email, password)} >Log in !</button>
//         )}/>
//         </div>
//       </form>
//     </div>
//   )
// }
//



// onClick={(event) => handleSubmit(event, email, password, url)}
// export default LoginForm2
