import React, {Component, Fragment} from 'react';
import axios from 'axios';
import { Guest } from './Guest';

class ShowEvent extends Component {
  constructor (props){
    super(props);
    this.state = {
      meal: null,
      user: null,
    }
  }

 async componentDidMount(){
    const eventId = this.props.match.params.eventId;

    const header = {
      'x-auth-token': localStorage.getItem('token')
    }

    await axios.get("https://meetmeal-dev.herokuapp.com" + '/users/my-profile', { headers: header })
          .then((res) => {
            this.setState({ user: res.data })
          })
          .catch((err) => {
            console.error(err.response);
          })
    
    const url = "https://meetmeal-dev.herokuapp.com" + '/events/' + eventId;

    axios.get(url, {
      headers: header}
    ).then( res => {
      console.log('meal: ', res.data);
      console.log('userIDConnected: ', this.state.user._id)
      this.setState({ meal: res.data });
    }).catch( err => {
      console.log(err.response);
    })
  }

  subscribeToAnEvent = async (event) => {
    event.preventDefault();
    const header = {
      'x-auth-token': localStorage.getItem('token')
    }

    const userInfo = await axios.get("https://meetmeal-dev.herokuapp.com" + '/users/my-profile',
          { headers: header})

    const userToquesAvailable = userInfo.data.toquesAvailable

    if (userToquesAvailable < this.state.meal.cost)
      alert("Vous n'avez pas assez de toques disponibles pour vous inscire à cet évenement.")
    else {
    const url = "https://meetmeal-dev.herokuapp.com" + '/events/' + this.state.meal._id + '/addGuest';
      await axios.put(url, null,
                  { headers: header }
                  ).then( res => {
                    this.setState({ guests: res.data })
                    alert('Vous avez rejoint l\'évènement');
                    this.props.history.push('/list-events');
                  }).catch( err => {
                    if (err.response.data.msg === 'Vous ne pouvez pas rejoindre votre propre evenement')
                      alert('Vous ne pouvez pas rejoindre votre propre evenement');
                    else if (err.response.data.msg === 'Vous etes deja inscrit a cet evenement')
                      alert('Vous etes deja inscrit a cet evenement')
                    else if ( err.response.data.msg === "Nombre maximum d'invites deja atteint")
                      alert("Nombre maximum d'invites deja atteint")
                    else
                      console.log(err.response);
                  })
    }
  }

  removeToAnEvent = async(event) => {
    event.preventDefault();
    const header = {
      'x-auth-token': localStorage.getItem('token')
    }
    const url = "https://meetmeal-dev.herokuapp.com" + '/events/' + this.state.meal._id + '/removeGuest';
    await axios.put(url, null,
                { headers: header }
                ).then( res => {
                  this.setState({ meal: res.data })
                  console.log(res.data);
                  alert('Vous avez quitté l\'évènement');
                }).catch( err => {
                  console.error(err)
                })
  }
  
  render() {
    var {
      meal,
      user,
    } = this.state

    var renderGuests = () => {
      if (meal.guests && meal.guests.length === 0)
        return (<div><h1>Pas d'invités</h1></div>)
      else {
        console.log('user', user)
        if(user && meal && user._id == meal.user._id){
          {console.log('user', user)}
          return meal.guests.map((guest, index) =>(
          <Guest meal={this.state.meal._id} className='Guest' {...guest} key={index} />
          ))
        }
        var userIdFilter = meal.guests.filter(guest => guest.userId._id == this.state.user._id);
        console.log('userIdFilter', userIdFilter);
        console.log('userConnected', user._id)
        if(user && userIdFilter.length !== 0){
          return (<button className="btn btn-danger" onClick={this.removeToAnEvent}>Se désinscrire</button>)
        }
        else{
          return (<button className="btn btn-primary" onClick={this.subscribeToAnEvent}>S'inscrire</button>)
        }
      }
    }
    return (
      <Fragment>
        <div>
        { meal ? (
          <div className="container">
            {console.log(meal.guests)}
              <h1>hello</h1>
              <div className="infos">{meal.title}</div>
              <div className="infos">{meal.date}</div>
              {/* <div className="infos">{meal.time}</div> */}
              <div className="infos">{meal.hour}</div>
              <div className="infos">{meal.minutes}</div>
              <div className="infos">{meal.typeOfMeal}</div>
              <div className="infos">{meal.description}</div>
              <div className="infos">{meal.typeOfCuisine}</div>
              <div className="infos">{meal.starter}</div>
              <div className="infos">{meal.dish}</div>
              <div className="infos">{meal.dessert}</div>
              <div className="infos">{meal.drinks}</div>
              <div className="infos">{meal.other}</div>
              <div className="infos">{meal.menu}</div>
              <div className="infos">{meal.allergens}</div>
              <div className="infos">{meal.address}</div>
              <div className="infos">{meal.zipCode}</div>
              <div className="infos">{meal.city}</div>
              <div className="infos">{meal.numberMaxOfGuests}</div>
              <div className="infos">{meal.cost}</div>
              <br/>
              <br/>
              <br/>
              <div className="table-responsive-sm">{renderGuests()}</div>
            </div>

          ) : null}
        </div>
      </Fragment>
   )
 }
}

export default ShowEvent
