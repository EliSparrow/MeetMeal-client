import React, { Component } from "react";

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
      numberMaxOfGuests: this.props.numberMaxOfGuests
    })
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
    Axios.get('http://localhost:1509/users/my-profile', { headers: header })
      .then((res) => {
        this.setState({ user: res.data })
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  checkEdit = () => {
    const { user, _id } = this.state;
    if ( user && (user._id == this.props.user._id)){
      return(
        <div className='edit-button'>
          <a href={"/editevent/" + _id}><button className="btn btn-warning">Modifiez votre évènement!</button></a>
        </div>
      )
    }
    console.log(this.props.user._id)
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
      numberMaxOfGuests
    } = this.state;

    return (
      <div class="card mb-3" >
        <div class="row no-gutters">

          <div class="col-md-4">
            <div class='image'>
              <img src={avatar} alt='user profile avatar'></img>
            </div>
            <div class='info'>
              <h1>{firstname} {lastname}</h1>
              <h2>{numberMaxOfGuests}</h2>
            </div>
          </div>

          <div class="col-md-6">
            <div class='info'>

              <a href={"/event/"+_id}><h3>{title}</h3></a>
            </div>
            <div class='info'>
              <p>{description}</p>
            </div>
            <div class='info'>
              <p>{city} {cost}</p>
            </div>
          </div>
            { this.checkEdit() }
          <div class="col-md-2">
            <button type='submit'></button>
          </div>

        </div>
      </div>
    )
  }
}

export default CardEvent;
