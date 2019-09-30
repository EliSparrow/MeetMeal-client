import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.state = {hidden: true};
    this.routeChange = this.routeChange.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  routeChange() {
    this.props.history.push("/register");
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
        localStorage.setItem("token", res.data.token);
        this.props.history.push('/');
      }
    }).catch(err => {
      console.log(err);
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
      <div className="container" id="container">
      
      <div className="form-container sign-in-container">
        <form onSubmit={this.handleSubmit}>
          <h1>Votre compte</h1>
          <div className="social-container">
            <Link to="#" className="fa fa-facebook"></Link>
            <Link to="#" className="fa fa-google"></Link>
          </div>
          <span>ou utilisez vos identifiants</span>
          <input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
          <input placeholder="Mot de passe" name="password" onChange={this.handleChange} type={this.state.hidden ? "password" : "text"} />
          <a onClick={this.toggleShow}>Voir/Cacher mot de passe</a>
          {/* <a href="#">Mot de passe oublié ?</a> A voir si service mail activé */}
          <button className="submit">Connexion</button>
        </form>
      </div>
      
      <div className="overlay-container">
        <div className="overlay">
           <div className="overlay-panel overlay-right">
            <h1>Pas de compte ?</h1>
            <p>Inscrivez-vous pour faire partie de l'aventure</p>
            <button className="ghost" name="signUp" onClick={this.routeChange}>Inscription</button>
          </div>
        </div>
      </div>
      
    </div>
    )
  }
}

export default withRouter(Login);
