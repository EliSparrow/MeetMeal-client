import React, { Component } from "react";

import '../../stylesheets/cardEvent.css';

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
      numberMaxOfGuests: ""
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
  }

  handleSubmit = async (event) => {
   event.preventDefault();
    console.log(this.state._id);
    const url = '/event/:' + this.state._id.toString() ;
    console.log(url);
    this.props.history.push(url)
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
              <img src={avatar}></img>
            </div>
            <div class='info'>
              <h1>{firstname} {lastname}</h1>
              <h2>{numberMaxOfGuests}</h2>
            </div>
          </div>

          <div class="col-md-6">
            <div class='info'>

              <a href={"/"+_id}><h3>{title}</h3></a>
            </div>
            <div class='info'>
              <p>{description}</p>
            </div>
            <div class='info'>
              <p>{city} {cost}</p>
            </div>
          </div>

          <div class="col-md-2">
            <button type='submit'></button>
          </div>

        </div>
      </div>
    )
  }
}

export default CardEvent;
