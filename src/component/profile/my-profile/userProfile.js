import React, { Fragment } from 'react';
import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../../layout/Spinner';

import UserEvents from './userEvents.js';
import '../../../stylesheets/profile/profil.scss';
import '../../../stylesheets/userProfile.css';

const getUserProfile = (( setProfiles, props) => {
  const header = {
    'x-auth-token': localStorage.getItem('token')
  }
  axios.get(process.env.REACT_APP_API + '/users/my-profile',
    { headers: header},
  ).then(res => {
    setProfiles(res.data)
  }).catch(err => {
    console.error(err);
    //alert('Nous sommes désolés, nous faisons face à un problème de serveur')
    props.history.push('/')
  })
});

const UserProfile = (props, history) => {
  let [profiles, setProfiles] = useState([])
    if (profiles.length === 0){
      getUserProfile(setProfiles, history, props)
    }

  return (
    <div className='container-general container user-profile'>
      {profiles ? (
        <Fragment>
        <div className='row user-cards'>
          <div className='col-md-3 user-info-intro'>
            <img className='img-fluid' src={profiles.avatar} alt='user profile avatar'></img>
            <h2 className='user-name'> {profiles.firstname} {profiles.lastname}</h2>
            <p className='user-age'> Age : {profiles.age} </p>
            
          </div>
          <div className='col-md-5 info-profile'>
              <div className='user-name'>
                <p> Situation amoureuse :  {profiles.loveStatus}</p>
                <p className='user-info'>Localisation: {profiles.zipCode} {profiles.city}</p>
                <p className='user-bio'>Description: {profiles.bio}</p>
              </div>
            </div>
            <br/>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-md-12'>
                <Link to ='/edituser'>
                  <button className='user-btn btn-warn'>
                Modifier Votre Profile
                </button>
                </Link>
                </div>
                <div className='col-md-12'>
                <Link to ='/deleteuser'>
                  <button className='user-btn '>
                  Bloquez votre compte
                  </button>
                </Link>
                </div>
              </div>
            </div>
          
          </div>

          <div>
            <UserEvents />
          </div>
          </Fragment>
          ) : (
            <div className='spinner'>
              <Spinner/>
            </div>
          ) }
    </div>
  );
}

export default UserProfile;
