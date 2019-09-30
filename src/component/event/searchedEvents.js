import React, { Component } from 'react';
import axios from 'axios';

class SearchedEvents extends Component {
  constructor(props){
    super(props);
    this.state = {
      zipcode: "",
      city: "",
      date: "",
      typeOfMeal: "",
      typeOfCuisine: "",
      user: "",
    }
  }

  componentDidMount(){

  }
}
export default SearchedEvents;
