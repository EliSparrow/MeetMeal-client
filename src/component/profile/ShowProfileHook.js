import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Spinner } from '../layout/Spinner';
import UserEvents from './my-profile/userEvents';

const ShowProfileHook = (props) => {
    const[userShow, setUserShow] = useState(null);

    useEffect(() => {
        const header = {
            'x-auth-token': localStorage.getItem('token')
        }

        const url = "https://meetmeal-dev.herokuapp.com" + '/users/my-profile' ;

        axios.get(url, {
            headers: header
         }).then( res => {
             setUserShow(res.data)
         }).catch(err => {
            console.log(err.response);
         })
    })

    return(
        <Fragment>
            <div className='container user-profile'>
            {userShow ? (
            <div className='row'>
                <div className='col-lg-3 user-info-intro'>
                    <img className='img-fluid' src={ userShow.avatar } alt='user profile avatar'></img>
                </div>
                <div className='col-lg-9 user-info-intro'>
                    <h3 className='user-name'> { userShow.firstname } { userShow.lastname }</h3>
                </div>
                <br/>
                <div className='col-lg-4 info-profile' id='info-profile'>
                    <div className='user-name'>
                        <p>Age : { userShow.age }</p>
                        <p>Situation amoureuse :  { userShow.loveStatus }</p>
                    </div>
                </div>
                <div className='col-lg-4 user-info-intro'>
                    <p className='user-info'>Localisation: { userShow.zipCode } { userShow.city }</p>
                </div>
                <div className='col-lg-4 user-info-bio'>
                    <p className='user-bio'>Description: { userShow.bio }</p>
                </div>
                <div className='col-lg-4 user-info-intro'>
                    <p className='user-toquesAvailable'>Toques Disponibles: { userShow.toquesAvailable }</p>
                </div>
                <div className='col-lg-4 user-button-delete-edit'>
                </div>
            </div>
            ) : null }
            </div>
        </Fragment>
    )
}

export default ShowProfileHook