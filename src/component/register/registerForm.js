import React, { useState, setState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import useForm from './useForm.js';
import toggle from '../toggleLogReg/toggle.js';


const Register = props => {
    const submitRegister = (e) => {

        const { firstname, lastname, age, email, password } = values
        axios.post(process.env.REACT_APP_API + '/users/register', {
             firstname,
             lastname,
             age,
             email,
             password  
            })
            .then(res => {
                console.log(res)
                notifySuccess(res.data.msg)
                props.history.push('/login')
            })
            .catch(err => {
                console.log(err)
                notifyFailure()
            })
    }

    // const HideShow = props => {
    //   const [isPassword, setPassword] = useState(true);
    //   if (isPassword) {
    //     return isPassword ? 'password' : 'text';
    // }


    const [ passwordVisibility, setPasswordVisibility ] = useState(false)

    const togglePasswordVisibility = () => {
      setPasswordVisibility(!passwordVisibility)
    }

    const routeChange = () => {
      props.history.push("/login");
    }
    const { values, handleChange, handleSubmit } = useForm(submitRegister)

    const notifySuccess = (msg) => { toast.success(msg) }
    const notifyFailure = (msg) => { toast.error(msg) }

    return (
    <div className="container right-panel-active" id="container">
  
      <div className="form-container sign-up-container login-form">
        <form onSubmit={handleSubmit}>
          <h1>Créer un compte</h1>
        <div className="social-container">            
        <Link to="#" className="fa fa-facebook"></Link>
        <Link to="#" className="fa fa-google"></Link>
        </div>
        <span>ou utiliser vos informations</span>
        <div className="group">      
          <input type="text" name="firstname" value={values.firstname} onChange={handleChange} required/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Prénom</label>
        </div>
        <div className="group">      
          <input type="text" name="lastname" value={values.lastname} onChange={handleChange}  required/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Nom</label>
        </div>
        <div className="group">      
          <input type="number" min="18" max="99" name="age" value={values.age} onChange={handleChange} required/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Age</label>
        </div>
        <div className="group">      
          <input type="text" name="email" value={values.email} onChange={handleChange} required/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="group">      
          <input type={passwordVisibility ? "text" : "password"} name="password" value={values.password} onChange={handleChange} required/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Mot de passe</label>
          <a onClick={togglePasswordVisibility}>Voir/Cacher mot de passe</a>
        </div>
        <div className="group"> 
          <button>Inscription</button>
        </div>
        </form>
      </div>
      
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Déjà un compte ?</h1>
            <p>Connectez-vous pour accéder à votre profil</p>
            <button className="ghost" id="signIn" onClick={routeChange} >Connexion</button>
          </div>
        </div>
      </div>
      
    </div>
    );

}


export default Register