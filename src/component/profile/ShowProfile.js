import React, { Component } from "react";
import { Link } from 'react-router-dom';
// import {useState} from 'react';
import Axios from 'axios';

class ShowProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         userShow: null,
         userConnected: null,
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
      const url = process.env.REACT_APP_API + '/users/' + this.props.match.params.profileId;

      Axios.get(url, {
         headers: header
      }).then( res => {
         this.setState({ userShow : res.data });
      }).catch(err => {
         console.log(err.response);
      })
      this.getUser();
   }

   getUser = async () => {
      const header = {
        'x-auth-token': localStorage.getItem('token')
      }
      Axios.get(process.env.REACT_APP_API + '/users/my-profile', { headers: header })
        .then((res) => {
          this.setState({ userConnected: res.data })
          console.log(res.data);
      })
        .catch((err) => {
          console.error(err);
      })
   }

   checkEdit = () => {
      const { userShow, userConnected } = this.state;
      if (( userShow && userConnected && (userShow._id === userConnected._id)) || (userShow && userConnected && (userConnected.admin === true))){
        return(
          <div className='edit-delete-button'>
             <Link to ={"/edituser/" +  userShow._id} className='btn btn-warning btn-sm'>
                  Modifier Votre Profile
               </Link>
               <Link to ={"/deleteuser/" + userShow._id} className='btn btn-danger btn-sm'>
                  Bloquez votre compte
               </Link>
          </div>
        )
      }
   }

   render() {   
      var { userShow } = this.state
      return(
         <div className='container user-profile'>
            {userShow ? (
            <div className='row'>
               <div className='col-lg-3 user-info-intro'>
                  <img className='img-fluid' src={ this.state.userShow.avatar } alt='user profile avatar'></img>
               </div>
               {/* <div className='row'> */}
               <div className='col-lg-9 user-info-intro'>
                  <h3 className='user-name'> { this.state.userShow.firstname } { this.state.userShow.lastname }</h3>
               </div>
               <br/>
               <div className='col-lg-4 info-profile' id='info-profile'>
                  <div className='user-name'>
                     <p>Age : { this.state.userShow.age }</p>
                     <p>Situation amoureuse :  { this.state.userShow.loveStatus }</p>
                  </div>
               </div>
               <div className='col-lg-4 user-info-intro'>
                  <p className='user-info'>Localisation: { this.state.userShow.zipCode } { this.state.userShow.city }</p>
               </div>
               <div className='col-lg-4 user-info-bio'>
                  <p className='user-bio'>Description: { this.state.userShow.bio }</p>
               </div>
               <div className='col-lg-4 user-button-delete-edit'>
                  {this.checkEdit()}
               </div>
            </div>
            ) : null }
         </div>
      );
   }
}

export default ShowProfile