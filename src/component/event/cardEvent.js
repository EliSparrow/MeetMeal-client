import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../../stylesheets/cardEvent.css';

import Axios from 'axios';

class CardEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      _id: "",
      firstname: "",
      lastname: "",
      avatar: "",
      title: "",
      descritpion: "",
      city: "",
      cost: "",
      numberMaxOfGuests: "",
      typeOfMeal: "",
      typeOfCuisine: "",
      user: null
    }
  }

  componentDidMount() {
    this.setState({
      _id: this.props._id,
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      avatar: this.props.avatar,
      title: this.props.title,
      description: this.props.description,
      city: this.props.city,
      cost: this.props.cost,
      numberMaxOfGuests: this.props.numberMaxOfGuests,
      typeOfMeal: this.props.typeOfMeal,
      typeOfCuisine: this.props.typeOfCuisine
    })
    console.log(this.props._id);
    this.getUser();
  }

  handleSubmit = async (event) => {
   event.preventDefault();
    console.log(this.state._id);
    const url = '/event/:' + this.state._id.toString() ;
    console.log(url);
    this.props.history.push(url)
  }

  getUser = async () => {
    const header = {
      'x-auth-token': localStorage.getItem('token')
    }
    console.log(this.props.user._id);
    Axios.get(process.env.REACT_APP_API + '/users/my-profile', { headers: header })
      .then((res) => {
        this.setState({ user: res.data })
        console.log(res.data);
        console.log(this.props.user._id)
      })
      .catch((err) => {
        console.error(err);
      })
  }

  checkEdit = () => {
    const { user, _id } = this.state;
    if (( user && (user._id === this.props.user._id)) || (user && (user.admin === true))){
      return(
        <div className='edit-button'>
          <Link to ={"/editevent/" + this.props._id }>
            <button type="submit">Je modifie mon évènement !</button>
          </Link>
        </div>
      )
    }
  }

  render(){
    const {
      _id,
      firstname,
      lastname,
      avatar,
      title,
      description,
      city,
      cost,
      numberMaxOfGuests,
      typeOfMeal,
      typeOfCuisine
    } = this.state;

    return (

      <div className="card row col-lg-12">
      <div className="card-body row">
      <div className='image col-3'>
        <img src={avatar} alt='user profile avatar'></img>
        <h6 className="card-subtitle text-muted">{firstname} {lastname}</h6>
      </div>
      <div className="col-5">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Type de repas : {typeOfMeal}</p>
        <p className="card-text">Type de cuisine : {typeOfCuisine}</p>
        <p className="card-text">{description}</p>
        <p className="card-text"><i className="fa fa-map-marker"/> {city}</p>
        </div>
        <div className="col-4">
        <p className="card-text">Pour {numberMaxOfGuests} personnes</p>
        <p className="card-text">Coût : {cost} Toques</p>
        <button type="submit">Je rejoins l'évenement !</button>
        <div className="checkedit">
          {this.checkEdit()}
        </div>
        </div>
      </div>
    </div>
    )
  }
}

export default CardEvent;
