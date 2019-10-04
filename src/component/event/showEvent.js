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
          <div className="container" style={{marginTop: 142 + 'px'}}>
            {console.log(meal.guests)}
            <div className='title' style={{marginBottom: 42 + 'px'}}>
              <h1>L'évenement : {meal.title}</h1>
              </div>
              <div className="infos">A lieu le : {meal.date} à {meal.hour}: {meal.minutes}</div><br></br>
              {/* <div className="infos">{meal.time}</div> */}
              <div className="infos">Nombre d'invités possible : {meal.numberMaxOfGuests} personnes</div><br></br>
              <div className='row'>
              <div className="infos col-6">Type de repas : {meal.typeOfMeal}</div>
              <div className="infos col-6">Type de cuisine : {meal.typeOfCuisine}</div>
              </div><br></br>
              <div className="infos" style={{fontSize: 2 + 'em'}}>Description de l'évenement :<br></br> {meal.description}</div><br></br>
              <div className="infos"style={{fontSize: 2 + 'em'}}>Au menu : {meal.menu}</div><br></br>
              <div className="infos" style={{fontSize: 2 + 'em'}}>Allergènes : {meal.allergens}</div><br></br>
              <div className='row'>
              <div className="infos col">Adresse postal : {meal.address}</div>
              <div className="infos col">Code postal : {meal.zipCode}</div>
              <div className="infos col">Ville : {meal.city}</div>
              </div><br></br>
              <div className="infos" style={{fontSize: 2 + 'em'}}>Coût du repas : {meal.cost} Toques </div>
              <br/>
              <br/>
              <br/>
              <div className="table-responsive-sm" style={{textAlign: 'center', marginBottom: 10 + 'px'}}>{renderGuests()}</div>
            </div>

          ) : null}
        </div>
      </Fragment>
   )
 }
}

export default ShowEvent
