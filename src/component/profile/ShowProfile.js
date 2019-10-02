import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import {useState} from 'react';
import axios from 'axios';

class ShowProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: null,
         profileId: this.props._profileId,
         lastname:"",
         firstname: "",
         age: 0,
         avatar: "",
         bio: "",
         loveStatus: "",
         zipCode: 0,
         city: ""
      }
   }

   componentDidMount() {

      //const userId = this.props.profileId;
      const header = {
         'x-auth-token': localStorage.getItem('token')
      }
      const url = 'http://localhost:1509/users/' +this.props.match.params.profileId;

      axios.get(url, {
         headers: header
      }).then( res => {
         this.setState({ user : res.data });
      }).catch(err => {
         console.log(err.response);
      })
 
   }

   render() {   
      var { user } = this.state
      return(
         <div className='container user-profile'>
            {user ? (
            <div className='row'>
               <div className='col-lg-3 user-info-intro'>
                  <img className='img-fluid' src={ this.state.user.avatar } alt='user profile avatar'></img>
               </div>
               {/* <div className='row'> */}
               <div className='col-lg-9 user-info-intro'>
                  <h3 className='user-name'> { this.state.user.firstname } { this.state.user.lastname }</h3>
               </div>
               <br/>
               <div className='col-lg-4 info-profile' id='info-profile'>
                  <div className='user-name'>
                     <p>Age : { this.state.user.age }</p>
                     <p>Situation amoureuse :  { this.state.user.loveStatus }</p>
                  </div>
               </div>
               <div className='col-lg-4 user-info-intro'>
                  <p className='user-info'>Localisation: { this.state.user.zipCode } { this.state.user.city }</p>
               </div>
               <div className='col-lg-4 user-info-bio'>
                  <p className='user-bio'>Description: { this.state.user.bio }</p>
               </div>
               <div className='col-lg-4 user-button-delete-edit'>
                  <Link to ={"/edituser/" +  user._id} className='btn btn-warning btn-sm'>
                     Modifier Votre Profile
                  </Link>
                  <Link to ='/deleteuser' className='btn btn-danger btn-sm'>
                     Bloquez votre compte
                  </Link>
               </div>
            </div>
            ) : null }
         </div>
      );
   }
}

export default ShowProfile