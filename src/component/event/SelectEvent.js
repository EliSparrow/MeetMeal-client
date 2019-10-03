import React, { Component } from 'react';
import axios from 'axios';
import CardEvent from './cardEvent.js';

class SelectEvent extends Component {
   constructor(props){
      super(props);
      this.state = {
         meals: []
      }
   }

   componentDidMount(){
      console.log("Props = "+JSON.stringify(this.props));

      const header = {
         'x-auth-token': localStorage.getItem('token')
      }
      axios.get(process.env.React_APP_API + '/events/', {
         headers: header
      }).then( res => {
         this.setState({ meals: res.data });
         console.log(res.data);
      }).catch( err => {
         console.log(err.response);
      })

      // Tri event par date
      const dates  = this.props.match.params.date;
      const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
      const toDate = e => new Date(e).getTime();
      const byValue = (a,b) => a - b;
      const byDate = sortByMapped(toDate,byValue);
      console.log([...dates].sort(byDate));

      // Tri event par date et heure
      // const dates  = this.props.match.params.date;
      // const sortByMapped = map => compareFn => (a,b) => compareFn(map(a),map(b));
      // const flipComparison = fn => (a,b) => -fn(a,b);
      // const byValue = (a,b) => a - b;
      // const byDate = sortByMapped(e => e.date)(byValue);
      // const byTime = sortByMapped(e => e.time)(flipComparison(byValue));
      // const sortByFlattened = fns => (a,b) => fns.reduce((acc, fn) => acc || fn(a,b), 0);
      // const byDateTime = sortByFlattened([byDate,byTime]);
      // console.log([...dates].sort(byDateTime));
   }
 
   render(){
      var { meals } = this.state;
      var renderCards = () => {
         if( meals.date >= Date.now){
            console.log(meals);
            return meals.map((meal, date) => (
               <CardEvent {...meal} key={date}/>
            ));
         }
         else{
            return (<div><h1>Aucun repas à venir</h1></div>)
         }
      };
   }
}

export default SelectEvent;