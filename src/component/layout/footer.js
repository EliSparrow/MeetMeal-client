import React from 'react';

import '../../stylesheets/footer.css'
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    // <div className="container">
    //   <div className="footer row">
    //     <div className="col-12 col-sm-4" id="company-introduction">
    //       <h1 className="company-name">Meet Meal </h1><br></br>
    //       <p>MeetMeal : la plateforme de rencontre autour d'un repas !
    //       Venez rencontrer les membres de notre communauté autour d'un repas fait maison et dans une ambiance conviviale !
    //       Qui sait, l'amour et l'amitié seront surement au rendez-vous ?
    //       Bon appétit ! </p>
    //     </div>
    //     <div className="col-12 col-sm-4" id="company-introduction">
    //       <h2> A propos : </h2>
    //       <a href="/team" id='company-links'>L'équipe</a><br></br>
    //       <a href="/contact" id='company-links'>Nous contacter</a><br></br>
    //     </div>
    //     <div className="col-12 col-sm-4" id="company-introduction">
    //       <a href="/faq" id='company-links'>F.A.Q.</a><br></br>
    //       <a href="/create-meal" id='company-links'>Proposer un repas</a><br></br>
    //       <a href="/find-meal" id='company-links'>Trouver un repas</a><br></br>
    //       <a href="https://www.google.fr/maps/place/Epitech+Paris/@48.815664,2.3606193,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6717ff972ae09:0x692326b123aa4d9b!8m2!3d48.815664!4d2.362808"
    //       id='company-links'>Nous trouver !</a><br></br>
    //     </div>
    //   </div>
    // </div>
    <footer className="page-footer font-small blue pt-4">
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
                <a href="/team">L'équipe</a>
              </li>
              <li>
                <a href="/contact">Nous contacter</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">F.A.Q</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Proposer un repas</a>
              </li>
              <li>
                <a href="#!">Trouver un repas</a>
              </li>
              <li>
                <a href="https://www.google.fr/maps/place/Epitech+Paris/@48.815664,2.3606193,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6717ff972ae09:0x692326b123aa4d9b!8m2!3d48.815664!4d2.362808">
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
