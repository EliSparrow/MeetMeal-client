import React, { Component } from "react";
import axios from 'axios';

import EventsCreated from './eventsCreated';
import EventsJoined from './eventsJoined';

class UserEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: true,
          meals: [],
          title: "",
          date: "",
          time: "",
          typeOfMeal: "",
          typeOfCuisine: "",
          description: "",
          zipCode: "",
          city: "",
          numberMaxOfGuests: "",
          guests: "",
          comment: "",
          cost: "",
          idUser: "",
        };
    }

    async componentDidMount(){
      const header = {
        'x-auth-token': localStorage.getItem('token')
      }

      const userId = await axios.get(process.env.REACT_APP_API + '/users/my-profile',
        { headers: header})
      console.log('userId : ', userId);

      var userEventsCreated = await axios.get(process.env.REACT_APP_API + '/' + userId.data._id + '/showEvents')
      .then( res => {
        console.log(res.data);
      }).catch( err => {
        console.log(err.response);
      })
      console.log('userEventsCreated : ', userEventsCreated);

      var userEventsJoined = await axios.get(process.env.REACT_APP_API + '/' + userId.data._id + '/guestsEvents')
      .then( res => {
        console.log(res.data);
      }).catch( err => {
        console.log(err.response);
      })
      console.log('userEventsCreated : ', userEventsJoined);
    }






    showJoinedEvents = (event) => {
        event.preventDefault();
        this.setState({status: false})
    }

    showCreatedEvents = (event, status) => {
      event.preventDefault();
      this.setState({status: true})
    }

    render() {
        console.log('status : ', this.state.status);
        return (
            <div className="container">
                <button type="button" onClick={this.showCreatedEvents}>Repas créés</button>
                <button type="button" onClick={this.showJoinedEvents}>Repas rejoints</button>
                {this.state.status == true ? <EventsCreated/> : <EventsJoined/>}
            </div>
        )
    }
}

export default UserEvents;
