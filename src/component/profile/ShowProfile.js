import React, { Component } from "react";
// import {useState} from 'react';
import axios from 'axios';

class ShowProfile extends Component {
   constructor(props) {
      console.log('ShowProfile constructor '+props.profileId)
      super(props);
      this.state = {
         user: "",
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
      console.log('element url : ', this.props.match.params);
      console.log('element url : ', this.props.match.params.profileId);

      //const userId = this.props.profileId;
      console.log("Props = "+JSON.stringify(this.props));

      const header = {
         'x-auth-token': localStorage.getItem('token')
      }
      const url = 'http://localhost:1509/users/' +this.props.match.params.profileId;
      console.log(url);

      axios.get(url, {
         headers: header
      }).then( res => {
         console.log('Voici la reponse du then : ',res.data);
         this.setState({ user : res.data });
         console.log(this.state.user);
      }).catch(err => {
         console.log(err.response);
      })
 
   }

   render() {   
      // console.log('User render '+this.state.user.profileId);

      return(
         <div className='container user-profile'>
            {/* {user ? ( */}this.state.user.
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
                     { console.log(this.state.user.age) }
                     <p>Situation amoureuse :  { this.state.user.loveStatus }</p>
                  </div>
               </div>
               {/* </div> */}
               {/* <div className='row'> */}
               <div className='col-lg-4 user-info-intro'>
                  <p className='user-info'>Localisation: { this.state.user.zipCode } { this.state.user.city }</p>
               </div>
               {/* </div> */}
               {/* <div className='row'> */}
               <div className='col-lg-4 user-info-bio'>
                  <p className='user-bio'>Description: { this.state.user.bio }</p>
               </div>
               {/* </div> */}
            </div>
            {/* ) : null } */}
         </div>
      );
   }
}

export default ShowProfile