import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    return (
        <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
                <div className="formField">
                    <label className="formField_label" htmlFor="pseudo"> Pseudonyme </label>
                    <input type="text" minLength="3" maxLength="32" id="username" className="formField_input" placeholder="Entrer votre pseudonyme" name="username" value={values.username} onChange={handleChange} />
                </div>
                <div className="formField">
                    <label className="formField_label" htmlFor="email"> Email </label>
                    <input type="email" id="email" className="formField_input" placeholder="Entrer votre email" name="email" value={values.email} onChange={handleChange} />
                </div>
                <div className="formField">
                    <label className="formField_label" htmlFor="password"> Password </label>
                    <input type="password" minLength="8" maxLength="32" id="password" className="formField_input" placeholder="Entrer votre password" name="password" value={values.password} onChange={handleChange} />
                </div>
                <div className="formField">
                    <button className="formField_button"> Inscription </button> <Link to="/login" className="formField_link mr-20">Déja inscrit ?</Link>
                </div>
            </form>
        </div>

    );
}

export default Register;