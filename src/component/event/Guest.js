import React, { Component } from 'react';
import axios from 'axios';

export class Guest extends Component {
    constructor(props){
        super(props);
        this.state = {
            mealID: this.props.meal,
            GuestId: this.props._id,
            status: this.props.status,
            userId: this.props.userId.firstname.toString(),
            toggleStatusButton: ""
        }
        this.acceptGuest = this.acceptGuest.bind(this);
    }


    acceptGuest = () => {
        const header = {
            'x-auth-token': localStorage.getItem('token')
          }

          axios.put("https://meetmeal-dev.herokuapp.com" + "/events/" +  this.state.mealID + "/validateGuest/" + this.props.userId._id,{ toto: this.props._id }, { headers: header })
            .then((res) => {
                this.setState({ status: "Accepte" })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    refuseGuest = () => {
        const header = {
            'x-auth-token': localStorage.getItem('token')
        }

        axios.put("https://meetmeal-dev.herokuapp.com" + "/events/" +  this.state.mealID + "/refuseGuest/" + this.props.userId._id,{ toto: this.props._id }, { headers: header })
            .then((res) => {
            this.setState({ status: "refuse" });
            this.props.meal.onRemoveToAnEvent();
        })
            .catch((err) => {
            console.error(err);
        })
    }

    buttonToggleStatus = () => {
        if(this.state.status == "Accepte")
            return(<td className="button"><button className="btn btn-danger">se désincrire</button></td>)
        if(this.state.status == "En attente"){
            return(
                <td className="button">
                    <button className="btm btn-success" onClick={this.acceptGuest}>Accepter</button>
                    <button className="btn btn-danger" onClick={this.refuseGuest}>se désincrire</button>
                </td>
            )
        }

    }

    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Statut</th>
                        <th scope="col">prénom du convive</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="status">{this.state.status}</td>
                        <td className="status">{this.state.userId}</td>
                        {this.buttonToggleStatus()}
                    </tr>
                </tbody>
            </table>

        )
    }
}