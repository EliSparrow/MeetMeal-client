import React, {Component} from 'react';
import axios from 'axios';

class CreateEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "titre",
      date: "",
      time: "",
      hour: 0,
      minutes: 0,
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
      zipCode: 0,
      city: "",
      numberMaxOfGuests: 0,
      cost: 0
    }
  }

  changeInputsValues = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  setInputs = () => {
    this.setState({ hour: this.state.time.substr(0,2) });
    this.setState({ minutes: this.state.time.substr(3,2) });
    if(this.state.starter) this.setState({ starter:'entrée : ' + this.state.starter });
    if(this.state.dish) this.setState({ dish: ' plat : ' + this.state.dish });
    if(this.state.dessert) this.setState({ dessert:' dessert : ' + this.state.dessert });
    if(this.state.other) this.setState({ other: ' autres : ' + this.state.other });
    if(this.state.drinks) this.setState({ drinks:' boissons : ' + this.state.drinks });


    this.setState({ menu: this.state.starter + " " + this.state.dish + " " + this.state.dessert + " " + this.state.drinks + " " + this.state.other});

    this.setState({ 
      hour: this.state.time.substr(0,2),
      minutes: this.state.time.substr(3,2),
      starter:'entrée : ' + this.state.starter,
      dish: ' plat : ' + this.state.dish,
      dessert:' dessert : ' + this.state.dessert,
      other: ' autres : ' + this.state.other,
      drinks:' boissons : ' + this.state.drinks,
      menu: this.state.starter + " " + this.state.dish + " " + this.state.dessert + " " + this.state.drinks + " " + this.state.other
     }, function() {
     
      var body = {
        title: this.state.title,
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
    })
  }

  submitInputs = (event) => {
    event.preventDefault();
    
    this.setInputs();
    
    const headers = {
      'x-auth-token': localStorage.getItem('token')
    }
    // console.log(this.state.hour);
    
    // var body = {
    //   title: this.state.title,
    //   date: this.state.date,
    //   hour: parseInt(this.state.hour),
    //   minutes: parseInt(this.state.minutes),
    //   typeOfMeal: this.state.typeOfMeal,
    //   typeOfCuisine: this.state.typeOfCuisine,
    //   description: this.state.description,
    //   menu: this.state.menu,
    //   allergens: this.state.allergens,
    //   zipCode: parseInt(this.state.zipCode),
    //   address: this.state.address,
    //   city: this.state.city,
    //   numberMaxOfGuests: parseInt(this.state.numberMaxOfGuests),
    //   cost: parseInt(this.state.cost)
    // }
    this.setState({ 
      hour: this.state.time.substr(0,2),
      minutes: this.state.time.substr(3,2),
      starter:'entrée : ' + this.state.starter,
      dish: ' plat : ' + this.state.dish,
      dessert:' dessert : ' + this.state.dessert,
      other: ' autres : ' + this.state.other,
      drinks:' boissons : ' + this.state.drinks,
      menu: this.state.starter + " " + this.state.dish + " " + this.state.dessert + " " + this.state.drinks + " " + this.state.other
     }, function() {
     
      var body = {
        title: this.state.title,
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
   
      axios.post(process.env.REACT_APP_API + '/events/create',
        body,
        {headers: headers}
      ).then( res => {
        alert('Félicitiations : vous avez créé un repas !')
        this.props.history.push('/list-events');
      }).catch( err => {
        console.log(err.response);
        this.props.history.push('/list-events');
      })
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
              <input type="text" placeholder="Titre" className="event-input" id="title" onChange={this.changeInputsValues} required ></input>
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
                  <option id='typeOfMeal'>Petit-Dejeuner</option>
                  <option id='typeOfMeal'>Brunch</option>
                  <option id='typeOfMeal'>Dejeuner</option>
                  <option id='typeOfMeal'>Apero</option>
                  <option id='typeOfMeal'>Diner</option>
              </select>
            </div>
            <div className='col-lg-4'>
              <select className="form-control search-slt" id="typeOfCuisine" onChange={this.changeInputsValues} required>
                  <option id='typeOfCuisine'>Type de cuisine</option>
                  <option id='typeOfCuisine'>Americaine</option>
                  <option id='typeOfCuisine'>Argentine</option>
                  <option id='typeOfCuisine'>Marocaine</option>
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
