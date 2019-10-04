import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios';


import { Spinner } from "react-bootstrap";
import UserEvents from "./my-profile/userEvents";

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
      const header = {
         'x-auth-token': localStorage.getItem('token')
      }
      const url = "https://meetmeal-dev.herokuapp.com" + '/users/' + this.props.match.params.profileId;

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
      Axios.get("https://meetmeal-dev.herokuapp.com" + '/users/my-profile', { headers: header })
        .then((res) => {
          this.setState({ userConnected: res.data })
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
                {console.log('userShow._id', userShow._id)}
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


         // <div className='container-general container user-profile'>
         //    { userShow ? (
         //    <Fragment>
         //    <div className='row user-cards'>
         //       <div className='col-md-3 user-info-intro'>
         //          <img className='img-fluid' src={this.state.userShow.avatar} alt='user profile avatar'></img>
         //          <h2 className='user-name'> {this.state.userShow.firstname} {this.state.userShow.lastname}</h2>
         //          <p className='user-age'> Age : {this.state.userShow.age} </p>
                  
         //       </div>
         //       <div className='col-md-5 info-profile'>
         //          <div className='user-name'>
         //             <p> Situation amoureuse :  {this.state.userShow.loveStatus}</p>
         //             <p className='user-info'>Localisation: {this.state.userShow.zipCode} {this.state.userShow.city}</p>
         //             <p className='user-bio'>Description: {this.state.userShow.bio}</p>
         //          </div>
         //          </div>
         //          <br/>
         //          <div className='col-md-4'>
         //             {this.checkEdit()}
         //          {/* <div className='row'>
         //             <div className='col-md-12'>
         //             <Link to ='/edituser'>
         //                <button className='user-btn btn-warn'>
         //             Modifier Votre Profile
         //             </button>
         //             </Link>
         //             </div>
         //             <div className='col-md-12'>
         //             <Link to ='/deleteuser/'>
         //                <button className='user-btn '>
         //                coucou
         //                Bloquez votre compte
         //                </button>
         //             </Link>
         //             </div>
         //          </div> */}
         //          </div>
         //       </div>
         //       <div>
         //          <UserEvents/>
         //       </div>
         //       </Fragment>
         //       ) : (
         //          <div className='spinner'>
         //          <Spinner/>
         //          </div>
         //       ) }
         // </div>
      );
   }
}

export default ShowProfile