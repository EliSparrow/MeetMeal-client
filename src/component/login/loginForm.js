import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if (!this.state.email && !this.state.password) {
      alert('Les champs "email" et "mot de passe" sont manquants')
      return
    }
    axios.post('http://localhost:1509/users/login',
      {
        email: this.state.email,
        password: this.state.password
      })
    .then(res => {
      if (res.status === 200) {
        console.log(res.data.token)
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push('/');
      }
    }).catch(err => {
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
  };

  render(){
    return (
      <div className="register-div">
        <h1>Login here : </h1>
        <form className="form-register" onSubmit={this.handleSubmit}>

          <div class="group">
            <input type="text" placeholder="Your email" class="input-edit" id="email" onChange={this.handleChange} /><br></br>
          </div>
          <div class="group">
            <input type="password" placeholder="Your password" class="input-edit" id="password" onChange={this.handleChange}/><br></br>
          </div>
          <button className="submit">Log In !</button>
          <p> You're not a member yet ? <Link to='/register'>Register !</Link>
          </p>
        </form>
        <div className="logs">
        </div>
      </div>
    )
  }
}

export default Login;
