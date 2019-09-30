import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            firstname: "",
            lastname: "",
            age: 0,
            email: "",
            avatar: "",
            bio: "",
            loveStatus: "",
            zipCode: 0,
            address: "",
            city: "",
            password: "",
            toquesAvailable: 0
        };
    }

    componentDidMount() {
        this.setState({
            firstname: this.state.firstname,
            newFirstname: this.state.firstname,
            lastname: this.state.lastname,
            newLastname: this.state.lastname,
            age: this.state.age,
            newAge: this.state.age,
            email: this.state.email,
            newEmail: this.state.email,
            avatar: this.state.avatar,
            newAvatar: this.state.avatar,
            bio: this.state.bio,
            newBio: this.state.bio,
            loveStatus: this.state.loveStatus,
            newLoveStatus: this.state.loveStatus,
            zipCode: this.state.zipCode,
            newZipCode: this.state.zipCode,
            address: this.state.address,
            newAddress: this.state.address,
            city: this.state.city,
            newCity: this.state.city,
            password: this.state.password,
            newPassword: this.state.password,
            toquesAvailable: this.state.tocqueAvailable,
            newToquesAvailable: this.state.tocqueAvailable
        });

        const header = {
            'x-auth-token': localStorage.getItem('token')
        }
        axios.get('http://localhost:1509/users/my-profile',
            { headers: header},
        ).then(res => {
              this.setState({ user: res.data });
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



    handleEditUser = e => {
        e.preventDefault();

        const header = {
            'x-auth-token': localStorage.getItem('token')
        }

        var editUser = {
            firstname: this.state.newFirstname,
            lastname: this.state.newLastname,
            age: parseInt(this.state.newAge),
            email: this.state.newEmail,
            avatar: this.state.newAvatar,
            bio: this.state.newBio,
            loveStatus: this.state.newLoveStatus,
            address: this.state.newAddress,
            zipCode: parseInt(this.state.newZipCode),
            city: this.state.newCity,
            password: this.state.newPassword,
            toquesAvailable: parseInt(this.state.newToquesAvailable),
            id : this.state.user._id
        };
        console.log(editUser.address);
        console.log(editUser.id);

        axios.put(`http://localhost:1509/users/`+ editUser.id, editUser, { headers: header })
            .then(res => {
                alert('Votre profil a été modifié');
                this.setState({ user: res.data });
                this.props.history.push('/profile');
            })
            .catch(err => {
                console.error(err.response);
            })

    }

    render() {
        var {
            user
        } = this.state

        
        return(
            <div className="container">
                 {user ? (
                <div className= 'row'>
                    <form onSubmit={ this.handleEditUser }>
                        <div className='title'>
                            <h1>Modifiez votre profile: </h1>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.firstname} name='newFirstname' placeholder='firstname' className='input-firstname' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.lastname} name='newLastname' placeholder='lastname' className='input-lastname' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.age} name='newAge' className='input-age' placeholder='age' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='email' defaultValue={user.email} name='newEmail' className='input-email' placeholder='email' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.avatar} name='newAvatar' className='input-avatar' placeholder='avatar' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='textarea' defaultValue={user.bio} name='newBio' className='input-bio' placeholder='biographie' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.loveStatus} name='newLoveStatus' className='input-loveStatus' placeholder='Situation Amoureuse' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.zipCode} name='newZipCode' className='input-zipCode' placeholder='Code Postal' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.address} name='newAddress' className='input-address' placeholder='Adresse' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.city} name='newCity' className='input-city' placeholder='Ville' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='password' name='newPassword' className='input-password' placeholder='Mot de Passe' onChange={ this.handleChange }></input>
                        </div>
                        <div className='col lg-4 user-inputs'>
                            <input type='text' defaultValue={user.toquesAvailable} name='newToquesAvailable' className='input-toquesAvailable' placeholder='Monnaie Toque' onChange={ this.handleChange }></input>
                        </div>
                        <button className="submit">Modifiez votre profile</button>
                        <button className="reset"><Link redirect to='/edituser'>Annuler</Link></button>
                    </form>
                </div>
                 ) : null }
            </div>
        )
    }
}