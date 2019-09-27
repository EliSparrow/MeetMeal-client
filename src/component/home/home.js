import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import '../../stylesheets/home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
    <div className='container-search-bar-home'>
      <section className="search-sec">
        <div className="container-search-bar-home">
          <form action="#" method="post" noValidate="noValidate" className='search-bar-home'>
              <div className="row row-search-bar-home">
                  <div className="col-lg-12 search-bar-home">
                      <div className="row">
                          <div className="input-search-bar-home">
                              <input type="text" className="form-control search-slt" placeholder="Adresse : " id='address'></input>
                          </div>
                          <div className="input-search-bar-home">
                          <input type="date" id="start" name="trip-start"

                                 min="2019-01-01" max="2200-12-31"></input>
                          </div>
                          <div className="input-search-bar-home">
                            <select className="form-control search-slt" id="exampleFormControlSelect1">
                                <option id='typeOfMeal'>Type de repas</option>
                                <option id='breakfast'>Petit déjeuner</option>
                                <option id='brunch'>Brunch</option>
                                <option id='lunch'>Déjeuner</option>
                                <option id='apero'>Apéro</option>
                                <option id='dinner'>Dîner</option>
                            </select>
                        </div>
                        <div className="input-search-bar-home">
                          <select className="form-control search-slt" id="exampleFormControlSelect1">
                              <option>Type de cuisine</option>
                              <option>Américaine</option>
                              <option>Argentine</option>
                              <option>Chinoise</option>
                              <option>Coréenne</option>
                              <option>Espagnole</option>
                          </select>
                        </div>
                        <div className="input-search-bar-home">
                            <button type="button" className="btn btn-danger wrn-btn ">Rechercher</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </section>
    <div className="col-lg-4 col-md-4 col-sm-12 p-0 button">
      <button className="btn btn-primary btn-danger wrn-btn button-search-bar-home" >Organiser un repas</button>
    </div>
  </div>
  )
}

}

export default Home;
