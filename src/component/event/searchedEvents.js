import React, { Component } from 'react';
import axios from 'axios';
import { Row } from "react-bootstrap";
import CardEvent from './cardEvent.js';

class SearchedEvents extends Component {
  constructor(props){
    super(props);
    this.state = {
      meals: []
    }
  }

  async componentDidMount(){

    console.log('je suis dans SearchedEvents');
    const zipCode = this.props.match.params.zipCode.substr(1);
    const city = this.props.match.params.city.substr(1);
    const date = this.props.match.params.date.substr(1);
    const typeOfMeal = this.props.match.params.typeOfMeal.substr(1);
    const typeOfCuisine = this.props.match.params.typeOfCuisine.substr(1);

    this.state.meals = await axios.post('http://localhost:1509/search/event', {
                    zipCode: zipCode,
                    city: city,
                    date: date,
                    typeOfMeal: typeOfMeal,
                    typeOfCuisine: typeOfCuisine
                  }).catch(err => {
                    console.log(err.response);
                  })
  }

  render(){
    var {meals} = this.state;

    var renderMeal = () => {
      if( meals.length === 0)
        return ( <div> <h1> Pas de repas créés pour l'instant </h1></div>)
      else {
        console.log(meals);
        return meals.map((meal, index) => (
          <CardEvent
            {...meal}
            key={index}
          />
        ));
      }
    };

    return(
      <div className='container'>
        <Row>
          {renderMeal()}
        </Row>
      </div>
    )
  }

}
export default SearchedEvents;
