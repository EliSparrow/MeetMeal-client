import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../../stylesheets/editProfile.scss';

const EditProfileHook = (props) => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        newFirstname: '',
        newLastname: '',
        newAge: 0,
        newEmail: "",
        newAvatar: '',
        newBio: '',
        newLoveStatus: '',
        newZipCode: 0,
        newAddress: "",
        newCity: "",
        newPassword: "",
        newToquesAvailable: 0
    })

    const { newFirstname, newLastname, newAge, newEmail, newAvatar, newBio, newLoveStatus, newZipCode, newAddress, newCity, newPassword, newToquesAvailable } = formData;

    const onChange = async (e) => setFormData({...formData, [e.target.name] : e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log('formData: ', formData);
        const header = {
            'x-auth-token': localStorage.getItem('token')
        }

        var editUser = {
            firstname: newFirstname,
            lastname: newLastname,
            age: parseInt(newAge),
            email: newEmail,
            avatar: newAvatar,
            bio: newBio,
            loveStatus: newLoveStatus,
            address: newAddress,
            zipCode: parseInt(newZipCode),
            city: newCity,
            password: newPassword,
            toquesAvailable: parseInt(newToquesAvailable),
            id: user._id            
        }

        console.log('editUser: ', editUser);

        axios.put("https://meetmeal-dev.herokuapp.com" + `/users/`+ editUser.id, editUser, { headers: header })
            .then(res => {
                alert('Votre profil a été mis à jour');
                setUser(res.data);
                props.history.push('/profile');
            })
            .catch(err => {
                console.error(err.response);
            })
    }

    useEffect(() => {
        const header = {
            'x-auth-token': localStorage.getItem('token')
        }

        const url1 = "https://meetmeal-dev.herokuapp.com" + '/users/' + props.match.params.profileId ;
        const url2 = "https://meetmeal-dev.herokuapp.com" + '/users/my-profile';

        axios.get(url2, { headers: header })
            .then(res =>{
                setUser(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    })

    return (
        <Fragment>
            <div className="container">
                 {user ? (
                <div className= 'row'>
                    <form className='col-12 user-form login-form' onSubmit={e => onSubmit(e)} >
                        <div className='title'>
                            <h1>Modifiez votre profil: </h1>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.firstname} name='newFirstname'  placeholder='firstname' className='input-firstname' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Prénom</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.lastname} name='newLastname'  placeholder='lastname' className='input-lastname' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Nom</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.age} name='newAge' className='input-age' placeholder='age' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Âge</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='email' defaultValue={user.email} name='newEmail' className='input-email' placeholder='email' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.avatar} name='newAvatar' className='input-avatar' placeholder='avatar' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Avatar</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='textarea' defaultValue={user.bio} name='newBio' className='input-bio' placeholder='biographie' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Biographie</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.loveStatus} name='newLoveStatus' className='input-loveStatus' placeholder='Situation Amoureuse' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Statut</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.zipCode} name='newZipCode' className='input-zipCode' placeholder='Code Postal' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Code Postal</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.address} name='newAddress' className='input-address' placeholder='Adresse' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Adresse</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.city} name='newCity' className='input-city' placeholder='Ville' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Ville</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='password' name='newPassword' className='input-password' placeholder='Mot de Passe' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Nouveau mot de passe</label>
                        </div>
                        <div className='group user-inputs'>
                            <input type='text' defaultValue={user.toquesAvailable} name='newToquesAvailable' className='input-toquesAvailable' placeholder='Monnaie Toque' onChange={ e=>onChange(e) }></input>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Toques disponibles</label>
                        </div>
                        <div className='group user-buttons'>
                            <Link to='/profile' >
                                <button className="btn-warn">
                                    Annuler
                                </button>
                            </Link>
                            <button className="submit">Modifiez votre profile</button>
                        </div>
                    </form>
                </div>
                 ) : null }
            </div>
        </Fragment>
    )
}

export default EditProfileHook;