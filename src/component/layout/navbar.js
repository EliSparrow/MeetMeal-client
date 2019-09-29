import React, { Component } from 'react';
import axios from 'axios';
import image from '../../images/MeatMeal.png'
import '../../stylesheets/navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      logged: false,
      name: "",
    }
  }

  componentDidMount(){
    const header = localStorage.getItem('token');

    if (header){
      axios.get('http://localhost:1509/users/my-profile',
      { headers: header}
      ).then( res => {
        console.log('je suis dans la res');
        console.log(res.data);
        this.state.name.setState(res.data.firstname);

      }).catch( err => {
        console.log(err.response);
      })
    }
  }

  logout (){
    localStorage.removeItem('token')
    this.props.history.push("/login");
  }

  render(){
    const userDropdown = (
      <div className='border center'>
          <ul className='border'>
            <i className="fa fa-user fa-fw"></i>
              <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {this.state.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/edituser">Editer son profile</a>
                <a className="dropdown-item" href="/">Mon historique</a>
                <a className="dropdown-item" href="/login" onClick={this.logout}>Se déconnecter</a>
              </div>
          </ul>
      </div>
    )

    const regularNav = (
      <div className='border center'>
          <a className="nav-link" href="/register">Inscritpion</a>
          <a className="nav-link" href="/login">Connexion</a>
          <a className="nav-link" href="/">Rechercher un repas</a>
      </div>
    )

    return(
        <div>
          <nav>
            <a className='image-navbar' href='/'>
              <img src={image} alt='logo' href='/'></img>
            </a>
            {localStorage.token ? userDropdown : regularNav}
          </nav>
        </div>
    )
  }

}

export default Navbar;
