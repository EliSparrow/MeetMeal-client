import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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
    this.logout = this.logout.bind(this)
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
              <Link className="dropdown-item" to="/profile">Voir mon profil</Link>
              <Link className="dropdown-item" to="/edituser">Editer mon profil</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/login" onClick={this.logout}><i className="fa fa-sign-out fa-lg"></i> Se déconnecter</Link>
            </div>
          </li>
        </ul>
      </div>
    )

    const userLinks = (
      <>
        <li className="nav-item">
          <Link className="nav-link nav-link-left" to="/">Rechercher un repas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-link-left" to="/listusers">Rechercher un membre</Link>
        </li>
      </>
    )

    const offlineLinks = (
        <>
          <li className="nav-item">
            <Link className="nav-link nav-link-left" to="/login">Connexion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-left" to="/register">Inscritpion</Link>
          </li>
        </>
    )

    return(
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className='navbar-brand' to='/'>
            <img className='navLogo' src={image} alt='logo' to='/'></img>
          </Link>
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link nav-link-left" to="/">Acceuil <span className="sr-only">(current)</span></Link>
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
