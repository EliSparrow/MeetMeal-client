import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import '../../stylesheets/home.css';

const Home = () => {

    return (
    <div className='container'>
      <section className="search-sec">
        <div className="container">
          <form action="#" method="post" novalidate="novalidate">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="row">
                          <div className="col-lg-2 col-md-2 col-sm-4 p-0">
                              <input type="text" className="form-control search-slt" placeholder="Adresse : " id='address'></input>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-4 p-0">
                          <input type="date" id="start" name="trip-start"
                                 value="date"
                                 min="2019-01-01" max="2200-12-31"></input>
                          </div>
                          <div className="col-lg-2 col-md-2 col-sm-4 p-0">
                            <select className="form-control search-slt" id="exampleFormControlSelect1">
                                <option id='typeOfMeal'>Type de repas</option>
                                <option id='breakfast'>Petit déjeuner</option>
                                <option id='brunch'>Brunch</option>
                                <option id='lunch'>Déjeuner</option>
                                <option id='apero'>Apéro</option>
                                <option id='dinner'>Dîner</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 p-0">
                          <select className="form-control search-slt" id="exampleFormControlSelect1">
                              <option>Type de cuisine</option>
                              <option>Américaine</option>
                              <option>Argentine</option>
                              <option>Chinoise</option>
                              <option>Coréenne</option>
                              <option>Espagnole</option>
                          </select>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-4 p-0 search-slt'>
                          <input type="range" className="custom-range" id="customRange1"></input>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 p-0">
                            <button type="button" className="btn btn-danger wrn-btn">Rechercher</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </section>
    <div className="col-lg-4 col-md-4 col-sm-12 p-0 button">
      <button className="btn btn-primary btn-danger wrn-btn ">Organiser un repas</button>
    </div>
  </div>
  )

}

export default Home;
