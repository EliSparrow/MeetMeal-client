import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import './register.css';
import useForm from './useForm.js';


const Register = props => {
    const submitRegister = (e) => {

        const { firstname, lastname, age, email, password } = values
        axios.post('http://localhost:1509/user/register', { firstname, lastname, age, email, password  })
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


    const { values, handleChange, handleSubmit } = useForm(submitRegister)

    const notifySuccess = (msg) => { toast.success(msg) }
    const notifyFailure = (msg) => { toast.error(msg) }

    return (
        <Container>
    <Form onSubmit={handleSubmit}>
    <h1>Register now ! :)</h1>
        <Form.Group controlId="formUser" className="formUser">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="name" placeholder="Nom" value={values.firstname} onChange={handleChange} />
            <Form.Label>Prenom</Form.Label>
            <Form.Control type="name" placeholder="Prénom" value={values.lastname} onChange={handleChange} />
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" max="99" value={values.age} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Adresse E-mail</Form.Label>
            <Form.Control type="email" placeholder="Entrez votre adresse e-mail"value={values.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Entrez votre mot de passe" value={values.password} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Je m'enregistre !
        </Button>
        <Form.Text>J'ai déjà un compte ?<Link to="/login" className="formField_link mr-20"> Je me connecte</Link></Form.Text>
    </Form>
    </Container>
    );

}


export default Register;