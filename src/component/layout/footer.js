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
            <h5 className="text-uppercase">Nos réseaux ociaux</h5>
            <ul className="list-unstyled">
              <li>
                <a className='nav-link' href='!#'>Réseaux</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-md-0 mb-4">
            <h5 className="text-uppercase">A propos de nous</h5>

            <ul className="list-unstyled">
              <li>
              <a href="/team" className='nav-link'>L'équipe</a>
              </li>
              <li>
                <a href="/contact" className='nav-link'>Nous contacter</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-md-0 mb-4">
            <h5 className="text-uppercase">F.A.Q</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className='nav-link'>Proposer un repas</a>
              </li>
              <li>
                <a href="#!" className='nav-link'>Trouver un repas</a>
              </li>
              <li>
                <a className='nav-link' href="https://www.google.fr/maps/place/Epitech+Paris/@48.815664,2.3606193,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6717ff972ae09:0x692326b123aa4d9b!8m2!3d48.815664!4d2.362808">
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
