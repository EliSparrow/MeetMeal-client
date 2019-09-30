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
    // const userLinks = (
    //   <div>
    //           <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             {/* {this.state.name} */}
    //             <i className="fa fa-user fa-fw"></i>
    //           </a>
    //           <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //             <a className="dropdown-item" href="/edituser">Editer son profile</a>
    //             <a className="dropdown-item" href="/profile">voir mon profil</a>
    //             <a className="dropdown-item" href="/">Mon historique</a>
    //             <a className="dropdown-item" href="/login" onClick={this.logout}>Se déconnecter</a>
    //           </div>
    //   </div>
    // )

    const userDropdown = (
      <div className='my-2 my-lg-0'>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user fa-lg"></i></a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="/profile">Voir mon profil</a>
              <a className="dropdown-item" href="/edituser">Editer son profile</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/login" onClick={this.logout}>Se déconnecter</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login" onClick={this.logout}><i className="fa fa-sign-out fa-lg"></i></a>
          </li>
        </ul>
      </div>
    )

    const userLinks = (
      <>
        <li className="nav-item">
          <a className="nav-link" href="/">Rechercher un repas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/listusers">Voir les profiles</a>
        </li>
      </>
    )

    const offlineLinks = (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/login">Connexion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Inscritpion</a>
          </li>
        </>
    )

    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className='navbar-brand' href='/'>
            <img className='navLogo' src={image} alt='logo' href='/'></img>
          </a>
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Acceuil <span className="sr-only">(current)</span></a>
              </li>

              { localStorage ? userLinks : offlineLinks }
            </ul>
            
              { localStorage ? userDropdown : null }
            
            </div>
        </nav>
      </div>
    )
  }

}

export default Navbar;
