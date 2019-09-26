import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import useForm from './useForm.js';


const Register = props => {
    const submitRegister = (e) => {

        const { firstname, lastname, age, email, password } = values
        axios.post('http://localhost:1509/users/register', {
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


    const routeChange = () => {
      props.history.push("/login");
    }
    const { values, handleChange, handleSubmit } = useForm(submitRegister)

    const notifySuccess = (msg) => { toast.success(msg) }
    const notifyFailure = (msg) => { toast.error(msg) }

    return (
    //     <Container>
    // <Form onSubmit={handleSubmit}>
    // <h1>Register now ! :)</h1>
    //     <Form.Group controlId="formUser" className="formUser">
    //         <Form.Label> Nom </Form.Label>
    //         <Form.Control type="name" placeholder="Nom" name="lastname" value={values.lastname} onChange={handleChange} />
    //         <Form.Label> Prenom </Form.Label>
    //         <Form.Control type="name" placeholder="Prénom" name="firstname" value={values.firstname} onChange={handleChange} />
    //         <Form.Label> Age </Form.Label>
    //         <Form.Control type="number" placeholder="Age" max="99" name="age" value={values.age} onChange={handleChange}/>
    //     </Form.Group>
    //     <Form.Group controlId="formBasicEmail">
    //         <Form.Label>Adresse E-mail</Form.Label>
    //         <Form.Control type="email" placeholder="Entrez votre adresse e-mail" name="email" value={values.email} onChange={handleChange} />
    //     </Form.Group>
    //     <Form.Group controlId="formBasicPassword">
    //         <Form.Label>Mot de passe</Form.Label>
    //         <Form.Control type="password" placeholder="Entrez votre mot de passe" name="password" value={values.password} onChange={handleChange} />
    //     </Form.Group>
    //     <Button variant="primary" type="submit" name="submit">
    //         Je m'enregistre !
    //     </Button>
    //     <Form.Text>J'ai déjà un compte ?<Link to="/login" className="formField_link mr-20"> Je me connecte</Link></Form.Text>
    // </Form>
    // </Container>

    <div className="container right-panel-active" id="container">
  
  <div className="form-container sign-up-container">
    <form onSubmit={handleSubmit}>
      <h1>Créer un compte</h1>
	  <div className="social-container">            
    <Link to="#" className="fa fa-facebook"></Link>
    <Link to="#" className="fa fa-google"></Link>
    </div>
	  <span>ou utiliser vos informations</span>
      <input type="text" placeholder="Prénom" name="firstname" value={values.firstname} onChange={handleChange} />
      <input type="text" placeholder="Nom" name="lastname" value={values.lastname} onChange={handleChange}  />
      <input type="number" placeholder="Age" min="18" max="99" name="age" value={values.age} onChange={handleChange} />
      <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
      <input type="password" placeholder="Mot de passe" name="password" value={values.password} onChange={handleChange} />
      <button>Inscription</button>
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


export default Register;