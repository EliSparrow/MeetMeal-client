import axios from 'axios';
import React, { Component, Fragment } from "react";
import { Row } from "react-bootstrap";

import EventsCreated from './eventsCreated';
import EventsJoined from './eventsJoined';
import CardEvent from '../../event/cardEvent.js';

class UserEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: true,
          createdMeals: [],
          joinedMeals: [],
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

      await axios.get(process.env.REACT_APP_API + '/events/' + userId.data._id + '/showEvents')
            .then( res => {
              console.log('reponse created meals : ', res.data);
              this.setState({createdMeals: res.data})
              console.log('this state meals created: ', this.state.createdMeals);
            }).catch( err => {
              console.log(err.response);
            })

      await axios.get(process.env.REACT_APP_API + '/events/' + userId.data._id + '/guestsEvents')
            .then( res => {
              console.log('reponse joined meals : ',res.data);
              this.setState({joinedMeals: res.data})
              console.log('this state meals joined : ', this.state.joinedMeals);
            }).catch( err => {
              console.log(err.response);
            })
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

        var { createdMeals } = this.state.createdMeals;
        console.log('nouvelle var createMeals : ', createdMeals);

        // var renderCreatedMeal = () => {
        //   if( createdMeals === "")
        //     return ( <div> <h1> Pas de repas créés pour l'instant </h1></div>)
        //   else {
        //     console.log('dans le render createdMeals : ', createdMeals);
        //     return this.createdMeals.map((createdMeal, index) => (
        //       <CardEvent
        //         {...createdMeal}
        //         key={index}
        //       />
        //     ));
        //   }
        // };


        return (
            <Fragment>
                <nav className='nav-user-profile row'>
                    <div className="col-md-6">

                    <button type="button" onClick={this.showCreatedEvents}>Repas créés</button>
                    </div>
                    <div className="col-md-6">
                    <button type="button" onClick={this.showJoinedEvents}>Repas rejoints</button>
                    </div>
                </nav>
                <div className='row user-cards list-events'>

                </div>
            </Fragment>
        )
    }
}

export default UserEvents;
