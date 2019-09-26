import React from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/footer.css'
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Meat Meal</h5>
            <p>MeetMeal : la plateforme de rencontre autour d'un repas !
              Venez rencontrer les membres de notre communauté autour d'un repas fait maison et dans une ambiance conviviale !
              Qui sait, l'amour et l'amitié seront surement au rendez-vous ?
              Bon appétit !</p>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">A propos de nous</h5>

            <ul className="list-unstyled">
              <li>
              <Link to="/team">L'équipe</Link>
              </li>
              <li>
                <Link to="/contact">Nous contacter</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">F.A.Q</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#!">Proposer un repas</Link>
              </li>
              <li>
                <Link to="#!">Trouver un repas</Link>
              </li>
              <li>
                <Link to="https://www.google.fr/maps/place/Epitech+Paris/@48.815664,2.3606193,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6717ff972ae09:0x692326b123aa4d9b!8m2!3d48.815664!4d2.362808">
                  Nous trouver ! </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </footer>
  )
}

export default Footer;
