import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";

import CardEvent from './cardEvent.js';

class SearchedEvents extends Component {
   constructor(props){
    super(props);
    this.state = {
      searchedMeals: [],
      zipCode: this.props.match.params.zipCode.substr(1),
      city: this.props.match.params.city.substr(1),
      date: this.props.match.params.date.substr(1),
      typeOfMeal: this.props.match.params.typeOfMeal.substr(1),
      typeOfCuisine: this.props.match.params.typeOfCuisine.substr(1)
    }
 }

 executeSearch() {
   axios.post("https://meetmeal-dev.herokuapp.com" + '/search/event', {
        zipCode: this.state.zipCode,
        city: this.state.city,
        date: this.state.date,
        typeOfMeal: this.state.typeOfMeal,
        typeOfCuisine: this.state.typeOfCuisine
      }).then( res => {
        console.log("Data = ", res.data)
        this.setState({searchedMeals: res.data});
        console.log('EST CE QUE C TOI QUI EST UNDEFINED ? ', this.state.searchedMeals);
      }).catch(err => {
        console.log(err);
      })
 }

 componentDidMount() {
   console.log(this.state)
    this.executeSearch()
 }

    render () {
      var renderSearchedEvents = () => {

        var tabSearchedMeals = this.state.searchedMeals
        console.log("tabSearchedMeals = ", tabSearchedMeals)
        console.log("this state searched meals : ", this.state.searchedMeals);

        if(this.state.searchedMeals == "" || this.state.searchedMeals == []) {
          return (<div><h1> Aucun repas ne correspond à votre recherche pour le moment </h1><Link to="/"><button>Revenir à l'accueil</button></Link></div>)
        } else {
          return tabSearchedMeals.result.map((searchedMeal, index) => (
            <div>
            <CardEvent
                {...searchedMeal}
                key={searchedMeal._id}
                index={index}
                />
            </div>
          ));
        }
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
