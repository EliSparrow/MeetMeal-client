import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../../stylesheets/home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: "",
      zipCode: "",
      city: "",
      date: "",
      typeOfMeal: "",
      typeOfCuisine: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('handleChange : ', this.state);
  }

  sendSearch = async (event) => {
    event.preventDefault();
    console.log('sendSearch : ', this.state);

    if(Number.isInteger(this.state.location))
      this.setState({zipCode: this.state.location});
    else
      this.setState({city: this.state.location});

    if(this.state.typeOfMeal === "Type de repas")
      this.setState({typeOfMeal: ""})
    if(this.state.typeOfCuisine === "Type de cuisine")
      this.setState({typeOfCuisine: ""})

    const url = '/event/search/:' + this.state.city + '/:' + this.state.zipCode.toString() + '/:'
                + this.state.date + '/:' + this.state.typeOfMeal + '/:' + this.state.typeOfCuisine;

    this.props.history.push(url)
  }

  render(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return (
    <div className='container-search-bar-home'>
      <section className="search-sec">
        <div className="container-search-bar-home">
          <form action="#" method="post" noValidate="noValidate" className='search-bar-home'>
              <div className="row row-search-bar-home">
                  <div className="col-lg-12 search-bar-home">
                      <div className="row">
                          <div className="input-search-bar-home">
                              <input type="text" className="form-control search-slt" placeholder="Adresse : " id='address' name='location' onChange={this.handleChange}></input>
                          </div>
                          <div className="input-search-bar-home">
                          <input type="date" id="date" name="date"

                                 min={today} max="2200-12-31" onChange={this.handleChange}></input>
                          </div>
                          <div className="input-search-bar-home">
                            <select className="form-control search-slt" id="exampleFormControlSelect1" name='typeOfMeal' onChange={this.handleChange}>
                                <option value=''>Type de repas</option>
                                <option id='breakfast'>Petit déjeuner</option>
                                <option id='brunch'>Brunch</option>
                                <option id='lunch'>Déjeuner</option>
                                <option id='apero'>Apéro</option>
                                <option id='dinner'>Dîner</option>
                            </select>
                        </div>
                        <div className="input-search-bar-home">
                          <select className="form-control search-slt" id="exampleFormControlSelect1" name='typeOfCuisine' onChange={this.handleChange}>
                              <option value=''>Type de cuisine</option>
                              <option>Américaine</option>
                              <option>Argentine</option>
                              <option>Chinoise</option>
                              <option>Coréenne</option>
                              <option>Espagnole</option>
                          </select>
                        </div>
                        <div className="input-search-bar-home">
                            <button type="button" className="btn btn-danger wrn-btn " onClick={this.sendSearch}>Rechercher</button>
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
