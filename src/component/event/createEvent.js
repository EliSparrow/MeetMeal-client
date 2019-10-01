import React, {Component} from 'react';
import axios from 'axios';

class CreateEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "titre",
      date: "",
      time: "",
      hour: "",
      minutes: "",
      typeOfMeal: "",
      description: "",
      typeOfCuisine: "",
      starter: "",
      dish: "",
      dessert: "",
      drinks: "",
      other: "",
      menu: "",
      allergens: "",
      address: "",
      zipCode: "",
      city: "",
      numberMaxOfGuests: "",
      cost: "",
    }
  }

  changeInputsValues = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submitInputs = (event) => {
    event.preventDefault();
    this.state.hour.setState(this.state.time.substr(0,2));
    this.state.minutes.setState(this.state.time.substr(3,2));
    if(this.state.starter) this.state.starter.setState('entrée : ' + this.state.starter);
    if(this.state.dish) this.state.dish.setState(' plat : ' + this.state.dish);
    if(this.state.dessert) this.state.dessert.setState(' dessert : ' + this.state.dessert);
    if(this.state.other) this.state.other.setState(' autres : ' + this.state.other);
    if(this.state.drinks) this.state.drinks.setState(' boissons : ' + this.state.drinks);

    this.state.menu.setState(this.state.starter + this.state.dish + this.state.dessert + this.state.drinks + this.state.other);

    const headers = {
      'x-auth-token': localStorage.getItem('token')
    }

    const body = {title: this.state.title,
      date: this.state.date,
      hour: parseInt(this.state.hour),
      minutes: parseInt(this.state.minutes),
      typeOfMeal: this.state.typeOfMeal,
      typeOfCuisine: this.state.typeOfCuisine,
      description: this.state.description,
      menu: this.state.menu,
      allergens: this.state.allergens,
      zipCode: parseInt(this.state.zipCode),
      address: this.state.address,
      city: this.state.city,
      numberMaxOfGuests: parseInt(this.state.numberMaxOfGuests),
      cost: parseInt(this.state.cost)
    }
  //  console.log(body);

    axios.post(process.env.REACT_APP_API + '/events/create',
      body,
      {headers: headers}
    ).then( res => {
      alert('Félicitiations : vous avez créé un repas !')
      this.props.history.push('/');
    }).catch( err => {
      console.log(err.response);
      this.props.history.push('/');
    })
  };

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <form onSubmit={this.submitInputs}>
            <div className='title'>
              <h1>Proposez un repas : </h1>
            </div>
            <div className='col-lg-4 event-inputs'>
              <input type="text" placeholder="Titre" class="event-input" id="title" onChange={this.changeInputsValues} required ></input>
            </div>
            <div className='col-lg-4 event-inputs'>
              <input type="date" placeholder="Date" className="input-info" id="date" onChange={this.changeInputsValues} required></input>
            </div>
            <div className='col-lg-4 event-inputs'>
              <input type="time" placeholder="Time" className="input-info" id="time" onChange={this.changeInputsValues} required></input>
            </div>

            <div className='col-lg-4 event-inputs'>
              <input type="text" placeholder="Entrée" class="event-input" id="starter" onChange={this.changeInputsValues} ></input>
            </div>
            <div className='col-lg-4 event-inputs'>
              <input type="text" placeholder="Plat" class="event-input" id="dish" onChange={this.changeInputsValues} ></input>
            </div>
            <div className='col-lg-4 event-inputs'>
              <input type="text" placeholder="Dessert" class="event-input" id="dessert" onChange={this.changeInputsValues} ></input>
            </div>
            <div className='col-lg-4 event-inputs'>
              <input type="text" placeholder="Boissons" class="event-input" id="drinks" onChange={this.changeInputsValues} ></input>
            </div>
            <div className='col-lg-4 event-inputs'>
              <input type="text" placeholder="Autres :" class="event-input" id="other" onChange={this.changeInputsValues} ></input>
            </div>
            <div className='col-lg-4 event-inputs'>
              <input type="text" placeholder="Allergènes :" class="event-input" id="allergens" onChange={this.changeInputsValues} ></input>
            </div>

            <div className='col-lg-4'>
              <select className="form-control search-slt" id="typeOfMeal" onChange={this.changeInputsValues} required>
                  <option id='typeOfMeal'>Type de repas</option>
                  <option id='typeOfMeal'>Petit-Déjeuner</option>
                  <option id='typeOfMeal'>Brunch</option>
                  <option id='typeOfMeal'>Déjeuner</option>
                  <option id='typeOfMeal'>Apéro</option>
                  <option id='typeOfMeal'>Dîner</option>
              </select>
            </div>
            <div className='col-lg-4'>
              <select className="form-control search-slt" id="typeOfCuisine" onChange={this.changeInputsValues} required>
                  <option id='typeOfCuisine'>Type de cuisine</option>
                  <option id='typeOfCuisine'>Américaine</option>
                  <option id='typeOfCuisine'>Argentine</option>
                  <option id='typeOfCuisine'>Bresilienne</option>
                  <option id='typeOfCuisine'>Chinoise</option>
                  <option id='typeOfCuisine'>Espagnole</option>
              </select>
            </div>
            <div className='col-lg-12 event-inputs'>
              <input type="textarea" className="event-input" id="description"
                placeholder="Descritpion :" onChange={this.changeInputsValues}>
              </input>
            </div>
            <div className='col-lg-4'>
              <input type="text" placeholder="Adresse :" class="event-input" id="address" onChange={this.changeInputsValues} required></input>
            </div>
            <div className='col-lg-4'>
              <input type="text" placeholder="Code Postal :" class="event-input" id="zipCode" onChange={this.changeInputsValues} required></input>
            </div>
            <div className='col-lg-4'>
              <input type="text" placeholder="Ville :" class="event-input" id="city" onChange={this.changeInputsValues} required></input>
            </div>
            <div className='col-lg-4'>
              <input type="text" placeholder="Nombre d'invités :" class="event-input" id="numberMaxOfGuests" onChange={this.changeInputsValues} required></input>
            </div>
            <div className='col-lg-4'>
              <input type="text" placeholder="Nombre de toques :" class="event-input" id="cost" onChange={this.changeInputsValues} required></input>
            </div>
            <button className="submit">C'est parti</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateEvent;
