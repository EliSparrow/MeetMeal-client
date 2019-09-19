import React from 'react'
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../../stylesheets/home.css';

const Home = () => {

    return (
    <div class='container'>
      <section class="search-sec">
        <div class="container">
          <form action="#" method="post" novalidate="novalidate">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="row">
                          <div class="col-lg-2 col-md-2 col-sm-4 p-0">
                              <input type="text" class="form-control search-slt" placeholder="Adresse : " id='address'></input>
                          </div>
                          <div class="col-lg-2 col-md-2 col-sm-4 p-0">
                          <input type="date" id="start" name="trip-start"
                                 value="date"
                                 min="2019-01-01" max="2200-12-31"></input>
                          </div>
                          <div class="col-lg-2 col-md-2 col-sm-4 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option id='typeOfMeal'>Type de repas</option>
                                <option id='breakfast'>Petit déjeuner</option>
                                <option id='brunch'>Brunch</option>
                                <option id='lunch'>Déjeuner</option>
                                <option id='apero'>Apéro</option>
                                <option id='dinner'>Dîner</option>
                            </select>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4 p-0">
                          <select class="form-control search-slt" id="exampleFormControlSelect1">
                              <option>Type de cuisine</option>
                              <option>Américaine</option>
                              <option>Argentine</option>
                              <option>Chinoise</option>
                              <option>Coréenne</option>
                              <option>Espagnole</option>
                          </select>
                        </div>
                        <div class='col-lg-2 col-md-2 col-sm-4 p-0 search-slt'>
                          <nav class="nav">
                            <a class="nav-link active" href="#" id='cheap'>€</a>
                            <a class="nav-link active" href="#" id='medium'>€</a>
                            <a class="nav-link active" href="#" id='expensive'>€</a>
                            <a class="nav-link active" href="#" id='veryExpensive'>€</a>
                          </nav>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-4 p-0">
                            <button type="button" class="btn btn-danger wrn-btn">Rechercher</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </section>
    <div class="col-lg-4 col-md-4 col-sm-12 p-0 button">
      <button class="btn btn-primary btn-danger wrn-btn ">Organiser un repas</button>
    </div>
  </div>
  )

}

export default Home;
