import React, { Component } from 'react';
import axios from 'axios';
import image from '../../images/MeatMeal.png'
// import '../../stylesheets/navbar.css';
import '../../stylesheets/navbar.scss';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      logged: false,
      name: "",
      avatar: ""
    }
  }

  componentDidMount(){
    const header = {
      'x-auth-token': localStorage.getItem('token')
    }
    
    
    if(header["x-auth-token"]){
      axios.get(process.env.REACT_APP_API + '/users/my-profile',
      { headers: header})
      .then(res => {
        this.setState({
          name: res.data.firstname,
          avatar: res.data.avatar
        });
      })
    }
  }
  
  logout (){
    localStorage.removeItem('token')
    this.props.history.push("/login");
  }

  render(){
    const { avatar } = this.state;

    const userDropdown = (
      <div className='my-2 my-lg-0'>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              { avatar ? <img alt='avatar' src={ avatar } className='nav-avatar' ></img> : <i className="fa fa-user fa-fw"></i> }
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="/profile">Voir mon profil</a>
              <a className="dropdown-item" href="/edituser">Editer mon profil</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/login" onClick={this.logout}><i className="fa fa-sign-out fa-lg"></i> Se déconnecter</a>
            </div>
          </li>
        </ul>
      </div>
    )

    const userLinks = (
      <>
        <li className="nav-item">
          <a className="nav-link nav-link-left" href="/">Rechercher un repas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-link-left" href="/listusers">Rechercher un membre</a>
        </li>
      </>
    )

    const offlineLinks = (
        <>
          <li className="nav-item">
            <a className="nav-link nav-link-left" href="/login">Connexion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-left" href="/register">Inscritpion</a>
          </li>
        </>
    )

    return(
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className='navbar-brand' href='/'>
            <img className='navLogo' src={image} alt='logo' href='/'></img>
          </a>
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-link-left" href="/">Acceuil <span className="sr-only">(current)</span></a>
              </li>

              { localStorage.token ? userLinks : offlineLinks }
            </ul>
            
              { localStorage.token ? userDropdown : null }
            
            </div>
        </nav>
      </div>
    )
  }

}

export default Navbar;
