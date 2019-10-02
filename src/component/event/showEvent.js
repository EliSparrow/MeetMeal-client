import React, {Component} from 'react';
import axios from 'axios';

class ShowEvent extends Component {
  constructor (props){
    super(props);
    this.state = {
      idEvent: "",
      idUser: "",
      title: "titre",
      date: "",
      time: "",
      hour: "",
      minutes: "",
      typeOfMeal: "",
      description: "",
      typeOfCuisine: "",
      starter: "",
      dish: "",
      dessert: "",
      drinks: "",
      other: "",
      menu: "",
      allergens: "",
      address: "",
      zipCode: "",
      city: "",
      numberMaxOfGuests: "",
      cost: "",
    }
  }

  componentDidMount(){
//    const eventId = this.props.match.params
    console.log ("coucou");
    const eventId = this.props.match.params.eventId;
    console.log(eventId);
    const header = {
      'x-auth-token': localStorage.getItem('token')
    }
    const url = process.env.REACT_APP_API + '/events/' + eventId;
    console.log(url);

    axios.get(url, {
      headers: header}
    ).then( res => {
      console.log(res.data);
      this.setState(res.data);
      console.log(this.state);
    }).catch( err => {
      console.log(err.response);
    })
    }


 render() {
   return (
     <div>
      <h1>hello</h1>
      <h2>{this.state.address}</h2>
     </div>
   )
 }
}

export default ShowEvent
