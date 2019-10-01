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
          _id: "",
        };
    }

    async componentDidMount(){
      const header = {
        'x-auth-token': localStorage.getItem('token')
      }
      // console.log('env: ' + process.env.REACT_APP_API);
      
      // const userId = ""
      await axios.get(process.env.REACT_APP_API + '/users/my-profile',
      { headers: header})
      .then(res => {
        // console.log(res.data._id)
        this.state._id = res.data._id.toString()
        console.log(this.state._id)
      })
        

      await axios.get(process.env.REACT_APP_API + '/events/' + this.state._id + '/showEvents',
      { headers: header})
      .then( res => {
        console.log('ici');
        console.log(res.data);
      }).catch( err => {
        console.log(err.response.status);
      })

      // await axios.get(process.env.REACT_APP_API + '/' + this.state._id + '/guestsEvents')
      // .then( res => {
      //   console.log(res.data);
      // }).catch( err => {
      //   console.log(err.response.data);
      // })

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
