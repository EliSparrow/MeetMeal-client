import React, { Component } from 'react';
import axios from 'axios';
import { Row } from "react-bootstrap";

import CardEvent from './cardEvent.js';

class SearchedEvents extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchedMeals: []
    }
  }

  async componentDidMount(){
    const zipCode = this.props.match.params.zipCode.substr(1);
    const city = this.props.match.params.city.substr(1);
    const date = this.props.match.params.date.substr(1);
    const typeOfMeal = this.props.match.params.typeOfMeal.substr(1);
    const typeOfCuisine = this.props.match.params.typeOfCuisine.substr(1);

    axios.post('https://meetmeal.netlify.com' + '/search/event', {
      zipCode: zipCode,
      city: city,
      date: date,
      typeOfMeal: typeOfMeal,
      typeOfCuisine: typeOfCuisine
    }).then( res => {
      this.setState({searchedMeals: res.data});
    }).catch(err => {
      console.log(err.response);
    })
  }

  render(){
    var renderSearchedEvents = () => {
      var tabSearchedMeals = this.state.searchedMeals.result;
      if(this.state.searchedMeals === "") return (<div><h1> Aucun repas ne correspond à votre recherche pour le moment </h1></div>)
      return tabSearchedMeals.map((searchedMeal, index) => (
        <div>
        <CardEvent
            {...searchedMeal}
            key={searchedMeal._id}
            index={index}
            />
        </div>
      ));
    };

    return(
      <div className='container'>
        <Row>
          {renderSearchedEvents()}
        </Row>
      </div>
    )
  }
}
export default SearchedEvents;
