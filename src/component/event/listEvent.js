import React, { Component } from "react";
import axios from 'axios';
import { Row } from "react-bootstrap";
import CardEvent from './cardEvent.js';

class ListEvents extends Component {
  constructor(props){
    super(props);
    this.state = {
      meals: [],
    }
  }

  componentDidMount() {
    const header = {
        'x-auth-token': localStorage.getItem('token')
      }

    axios.get("https://meetmeal-dev.herokuapp.com" + '/events/', {
      headers: header
    }).then( res => {
      this.setState({ meals: res.data});
    }).catch( err => {
      console.log(err.response);
    })
  }

  render(){
    var { meals } = this.state;

    var renderMeal = () => {
      if( meals.length === 0)
        return ( <div> <h1> Pas de repas créés pour l'instant </h1></div>)
      else {
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

export default ListEvents;
