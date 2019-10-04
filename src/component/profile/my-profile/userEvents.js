import axios from 'axios';
import React, { Component, Fragment } from "react";
import CardEvent from '../../event/cardEvent.js';
import Spinner from '../../layout/Spinner.js';

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

      const userId = await axios.get("https://meetmeal-dev.herokuapp.com" + '/users/my-profile',
            { headers: header})

      await axios.get("https://meetmeal-dev.herokuapp.com" + '/events/' + userId.data._id + '/showEvents')
            .then( res => {
              this.setState({createdMeals: res.data})
            }).catch( err => {
              console.error(err.response);
            })

      await axios.get("https://meetmeal-dev.herokuapp.com" + '/events/' + userId.data._id + '/guestsEvents')
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
        var renderCreatedMeals = () => {
          if(this.state.createdMeals === "") return (<div><h1>Cet utilisateur n'a pas encore créé de repas pour le moment </h1></div>)
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
          if(this.state.joinedMeals === "") return (<div><h1>Cet utilisateur n'a pas encore rejoint de repas pour le moment </h1></div>)
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
              { this.showCreatedEvents || this.showJoinedEvents ? (
              <div className="userEvents">
                <nav className='nav-user-profile row'>
                    <div className="col-md-6">

                    <button type="button" onClick={this.showCreatedEvents}>Repas créés</button>
                    </div>
                    <div className="col-md-6">
                    <button type="button" onClick={this.showJoinedEvents}>Repas rejoints</button>
                    </div>
                </nav>
                <div className='row user-cards list-events'>
                  {this.state.status === true ? renderCreatedMeals() : renderJoinedMeals()}
                </div>

              </div>
              ) : (
                <Spinner/>
              )}
            </Fragment>
        )
    }
}

export default UserEvents;
