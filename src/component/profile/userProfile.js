import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

const getUserProfile = (setProfile) => {
  const header = {
    'x-auth-token': sessionStorage.getItem('token')
  }
  axios.get('http://localhost:1509/users/my-profile',
    { header: header}
  ).then(res => {
    setProfile(res.data)
  }).catch(err => {
    alert('Nous sommes désolés, nous faisons face à un problème de serveur')
    return (
      <Route exact path='/'></Route>
    )
  })
};

const UserProfile = () => {
  let [profiles, setProfiles] = useState([])
  if (profiles.length === 0)
    getUserProfile(setProfiles)

  return (
    <div className='user-profile' id='user-profile'>
      {
        profiles.map((profile) =>
          <div className='row'>
            <div className='info-profile' id='info-profile'>
              <div className='user-name'><p> First name : </p> {profile.firstname}</div>
              <div className='user-name'><p> Last name : </p> {profile.lastname}</div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UserProfile;
