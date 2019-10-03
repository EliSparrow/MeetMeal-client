import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/footer.scss'
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-4">
            <h5 className="text-uppercase">Nos réseaux sociaux</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="!#" className='fa fa-facebook col-4' style={{fontSize: 40 + 'px'}} ></Link>
              </li>
              <li>
                <Link to="!#" className='fa fa-twitter col-4' style={{fontSize: 40 + 'px'}} ></Link>
              </li>
              <li>
                <Link to="!#" className='fa fa-linkedin col-4' style={{fontSize: 40 + 'px'}} ></Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-md-0 mb-4">
            <h5 className="text-uppercase">LES REPAS & LES MEMBRES</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/create-event" className='nav-link'>Proposer un repas</Link>
              </li>
              <li>
                <Link to="/list-events" className='nav-link'>Trouver un repas</Link>
              </li>
              <li>
                <Link to="/listusers" className='nav-link'>Rechercher un membre</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-md-0 mb-4">
            <h5 className="text-uppercase">A propos de nous</h5>
            <ul className="list-unstyled">
              <li>
              <Link to="/team" className='nav-link'>L'équipe </Link>
              </li>
              <li>
              <Link to="/contact" className='nav-link'>Nous contacter</Link>
              </li>
              <li>
                <a className='nav-link' target="_blank" rel="noopener noreferrer" href="https://www.google.fr/maps/place/Epitech+Paris/@48.815664,2.3606193,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6717ff972ae09:0x692326b123aa4d9b!8m2!3d48.815664!4d2.362808">
                  Nous trouver ! </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </footer>
  )
}

export default Footer;
