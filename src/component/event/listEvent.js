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

    axios.get(process.env.REACT_APP_API + '/events/', {
      headers: header
    }).then( res => {
      this.setState({ meals: res.data});
      console.log(res.data);
    }).catch( err => {
      console.log(err.response);
    })
    console.log('this.props.history', this.props.history)
  }

  render(){
    var { meals } = this.state;

    var renderMeal = () => {
      if( meals.length === 0)
        return ( <div> <h1> Pas de repas créés pour l'instant </h1></div>)
      else {
        console.log(meals);
        return meals.map((meal, index) => (
          <CardEvent history={this.props.history}
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
