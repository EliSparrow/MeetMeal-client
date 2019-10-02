import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export class EditEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meal: null,
            _id: "",
            title: "",
            typeOfCuisine: "",
            time: null,
            typeOfMeal: "",
            description: "",
            menu: "",
            allergens: "",
            zipCode: 0,
            address: "",
            city: "",
            numberMaxOfGuests: 0,
            // guests: [],
            // comments: [],
            status: "",
            cost: 0,
            timeOfMeal: ""
        };
    }

    componentDidMount() {
        this.setState({
            id: this.state._id,
            title: this.state.title,
            newTitle: this.state.title,
            typeOfCuisine: this.state.typeOfCuisine,
            newTypeOfCuisine: this.state.typeOfCuisine,
            time: this.state.time,
            newTime: this.state.time,
            typeOfMeal: this.state.typeOfMeal,
            newTypeOfMeal: this.state.typeOfMeal,
            description: this.state.description,
            newDescription: this.state.description,
            menu: this.state.menu,
            newMenu: this.state.menu,
            allergens: this.state.allergens,
            newAllergens: this.state.allergens,
            zipCode: this.state.zipCode,
            newZipCode: this.state.zipCode,
            address: this.state.address,
            newAddress: this.state.address,
            city: this.state.city,
            newCity: this.state.city,
            numberMaxOfGuests: this.state.numberMaxOfGuests,
            newNumberMaxOfGuests: this.state.numberMaxOfGuests,
            // guests: this.state.guests,
            // newGuests: this.state.guests,
            // comments: this.state.comments,
            // newComments: this.state.comments,
            status: this.state.status,
            newStatus: this.state.status,
            cost: this.state.cost,
            newCost: this.state.cost,
            timeOfMeal: this.state.timeOfMeal
        });

        const header = {
            'x-auth-token': localStorage.getItem('token')
        }
        const eventId = this.props.match.params.eventId;
        axios.get(process.env.REACT_APP_API + '/events/' + eventId,
            { headers: header},
        ).then(res => {
              this.setState({ meal: res.data });
              if (res.data.time.hour >= 0 && res.data.time.hour < 10 ) res.data.time.hour = "0" + res.data.time.hour;
              if (res.data.time.minutes >= 0 && res.data.time.minutes < 10 ) res.data.time.minutes = "0" + res.data.time.minutes;
              this.setState({ timeOfMeal : res.data.time.hour + ":" + res.data.time.minutes ,
                              newTime: this.state.timeOfMeal });
          })
          .catch(err => {
              console.error(err);
          })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleChangeSelect = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }


    handleEditMeal = e => {
        e.preventDefault();
        const header = {
            'x-auth-token': localStorage.getItem('token')
        }
        const eventId = this.props.match.params.eventId;
        
        var editMeal = {
            title: this.state.newTitle,
            hour: this.state.newTime.substr(0,2),
            minutes: this.state.newTime.substr(3,2),
            typeOfCuisine: this.state.newTypeOfCuisine,
            typeOfMeal: this.state.newTypeOfMeal,
            description: this.state.newDescription,
            menu: this.state.newMenu,
            allergens: this.state.newAllergens,
            zipCode: parseInt(this.state.newZipCode),
            address: this.state.newAddress,
            city: this.state.newCity,
            numberMaxOfGuests: parseInt(this.state.newNumberMaxOfGuests),
            status: this.state.newStatus,
            cost: parseInt(this.state.newCost),
            id : eventId
        }

        axios.put(process.env.REACT_APP_API + `/events/`+ editMeal.id, editMeal, { headers: header })
            .then(res => {
                alert('Votre évènement a été modifié');
                this.setState({ meal: res.data });
                this.props.history.push('/list-events');
            })
            .catch(err => {
                console.error(err.response);
            })

    }

    render() {
        var {
            meal,
            timeOfMeal
        } = this.state

        return(
            <div className="container" style={{textalign: "center"}}>
                 {meal ? (
                <div className='row'>
                    {/* {meal.time.hour}:{meal.time.minutes} */}
                    <form onSubmit={ this.handleEditMeal }>
                        <div className='title col-12'>
                            <h1>Modifiez votre évènement</h1>
                            <hr className="col-12" style={{width: 'auto'}}></hr>
                            <div className='row'>
                        <div className='col-3 meal-inputs'>
                            <label>Titre de l'évenement</label>
                            <input type='text' defaultValue={meal.title} name='newTitle' placeholder='Titre' className='input-newTitle' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col-3 meal-inputs'>
                            <label>Heure de l'évènement</label><br></br>
                            <input type="time" className="input-time" name="newTime" defaultValue={ timeOfMeal } onChange={this.handleChange}></input>
                        </div>
                        <div className='col-3 meal-inputs'>
                            <label>Nombre d'invités </label><br></br>
                            <input type='number' defaultValue={meal.numberMaxOfGuests} name='newNumberMaxOfGuests' className='input-numberMaxOfGuests' placeholder="Nombre D'invités" onChange={ this.handleChange } style={{width: 40 + 'px'}}></input>
                        </div>
                        <div className='col-3 meal-inputs'>
                            <label>Coût du repas</label><br></br>
                            <input type='text' defaultValue={meal.cost} name='newCost' className='input-cost' placeholder='Prix' onChange={ this.handleChange } style={{width: 40 + 'px'}}></input>
                        </div>
                        </div>
                        </div>
                        {/* <div className='col lg-4 meal-inputs'>
                            <input type='text' defaultValue={meal.typeOfCuisine} name='newTypeOfCuisine' placeholder='Choisisez...' className='input-newTypeOfcuisine' onChange={ this.handleChange }></input>
                        </div> */}
                        {/* <div className='col lg-4 meal-inputs'>
                            <input type='text' defaultValue={meal.typeOfMeal} name='newTypeOfMeal' className='input-newTypeOfMeal' placeholder='Choisisez...' onChange={ this.handleChange }></input>
                        </div> */}
                        <div className='col-12 meal-inputs'>
                            <label>Description de l'évènement</label><br></br>
                            <textarea type='textarea' defaultValue={meal.description} name='newDescription' className='input-description' placeholder='email' onChange={ this.handleChange } style={{width: 440 + 'px', height: 50 + 'px'}}></textarea>
                        </div>
                        <div className='meal-inputs'>
                            <label>Menu</label><br></br>
                            <input type='text' defaultValue={meal.menu} name='newMenu' className='input-menu' placeholder='Menu' onChange={ this.handleChange }  style={{width: 400 + 'px'}}></input>
                        </div>
                        <div className='col meal-inputs'>
                            <label>Allergènes</label><br></br>
                            <input type='text' defaultValue={meal.allergens} name='newAllergens' className='input-allergens' placeholder='Allergènes' onChange={ this.handleChange } style={{width: 400 + 'px', textalign: "center"}}></input>
                        </div>
                        <div className='row'>
                            <label>Type de repas</label>
                            <select className="form-control search-slt" id="newTypeOfMeal" onChange={this.handleChangeSelect}>
                                <option id='newTypeOfMeal'>{meal.typeOfMeal}</option>
                                <option id='newTypeOfMeal'>Petit-Dejeuner</option>
                                <option id='newTypeOfMeal'>Brunch</option>
                                <option id='newTypeOfMeal'>Dejeuner</option>
                                <option id='newTypeOfMeal'>Apero</option>
                                <option id='newTypeOfMeal'>Diner</option>
                            </select>
                        </div>
                        <div className='row'>
                            <label>Type de cuisine</label>
                            <select className="form-control search-slt" id="newTypeOfCuisine" onChange={this.handleChangeSelect}>
                                <option id='newTypeOfCuisine'>{meal.typeOfCuisine}</option>
                                <option id='newTypeOfCuisine'>Americaine</option>
                                <option id='newTypeOfCuisine'>Marocaine</option>
                                <option id='newTypeOfCuisine'>Argentine</option>
                                <option id='newTypeOfCuisine'>Bresilienne</option>
                                <option id='enwTypeOfCuisine'>Chinoise</option>
                                <option id='newTypeOfCuisine'>Espagnole</option>
                            </select>
                        </div>
                        <hr style={{width: 100 + 'px'}}></hr>
                        <div className='meal-inputs'>
                            <label>Adresse postale</label><br></br>
                            <label style={{marginRight: 10 + 'px'}}>Numero , Rue  </label>
                            <input className='col-4' type='text' defaultValue={meal.address} name='newAddress' className='input-address' placeholder='Adresse' onChange={ this.handleChange }></input><br></br>
                            <label style={{marginRight: 10 + 'px'}}>Code postal  </label>
                            <input className='col-4' type='text' defaultValue={meal.zipCode} name='newZipCode' className='input-zipCode' placeholder='Code Postal' onChange={ this.handleChange }></input><br></br>
                            <label style={{marginRight: 10 + 'px'}}>Ville</label>
                            <input className='col-4' type='text' defaultValue={meal.city} name='newCity' className='input-city' placeholder='Ville' onChange={ this.handleChange }></input>
                        </div>
                        <hr style={{width: 100 + 'px'}}></hr>
                        <div className='col meal-inputs' style={{width: 200 + 'px'}}>
                            <label>En attente / Accepté</label><br></br>
                            <select className="form-control search-slt" id="newStatus" onChange={this.handleChangeSelect}>
                            <option id='newStatus' onChange={ this.handleChange }>{meal.status}</option>
                            <option id='newStatus' onChange={ this.handleChange }>En attente</option>
                            <option id='newStatus' onChange={ this.handleChange }>Accepté</option>
                            </select>
                        </div>
                        <hr style={{width: 100 + 'px'}}></hr>
                        <div className='row'>
                        <button className="submit col-md-auto" style={{marginRight: 10 + 'px'}}>Modifiez votre évènement</button>
                        <button className="reset col-md-auto"><Link to='/editmeal' style={{color: 'white'}}>Annuler</Link></button>
                        </div>
                    </form>
                </div>
                 ) : null }
            </div>
        )
    }
}