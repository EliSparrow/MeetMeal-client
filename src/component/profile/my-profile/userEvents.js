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

      await axios.get(process.env.REACT_APP_API + '/events/' + userId.data._id + '/showEvents')
            .then( res => {
              console.log('createdMeals: ', res.data);
              this.setState({createdMeals: res.data})
              var { createdMeals } = this.state.createdMeals;

            }).catch( err => {
              console.error(err.response);
            })

      await axios.get(process.env.REACT_APP_API + '/events/' + userId.data._id + '/guestsEvents')
            .then( res => {
              this.setState({joinedMeals: res.data})
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

        var {createdMeals} = this.state.createdMeals;
        console.log('nouvelle var createdMeals : HELLO HELLO ' , createdMeals);

        var {joinedMeals} = this.state.joinedMeals;
        console.log('nouvelle var joinedMeals : HELLO HELLO ' , joinedMeals);

        var renderCreatedMeals = () => {
          if(this.state.createdMeals == "") return (<div><h1>Cet utilisateur n'a pas encore créé de repas pour le moment </h1></div>)
          return this.state.createdMeals.map((createdMeal, index) => (
            <div>
            <CardEvent
                {...createdMeal}
                key={createdMeal._id}
                index={index}
                />
            </div>
          ));
        };

        var renderJoinedMeals = () => {
          if(this.state.joinedMeals == "") return (<div><h1>Cet utilisateur n'a pas encore rejoint de repas pour le moment </h1></div>)
          return this.state.joinedMeals.map((joinedMeal, index) => (
            <div>
            <CardEvent
                {...joinedMeal}
                key={joinedMeal._id}
                index={index}
                />
            </div>
          ));
        };

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
                  {this.state.status == true ? renderCreatedMeals() : renderJoinedMeals()}
                </div>
            </Fragment>
        )
    }
}

export default UserEvents;
