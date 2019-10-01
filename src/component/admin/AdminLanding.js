import React, { Component } from 'react';
import { ListUsers } from '../profile/ListUsers';
import { EditProfile } from '../profile/EditProfile';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AdminCreateForm } from './AdminCreateForm';

export class AdminLanding extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: null,
            admin : false,
            showListBool: true
        }
    }

    componentDidMount() {
        this.setState({ user: this.state.user });
        const header = {
            'x-auth-token': localStorage.getItem('token')
          }

        axios.get(process.env.REACT_APP_API + '/users/my-profile', { headers: header })
          .then((res) => {
              console.log(res.data.admin);
              this.setState({
                  user : res.data,
                admin : res.data.admin })
          })
          .catch((err) => {
              console.error(err);
          })
    }
    delUserList = () => {
        this.setState({
            showListBool : false})
    }
    
    render() {
        let UsersList;
        if (this.state.showListBool){
            UsersList = <ListUsers/>
        }
        else {
            UsersList = <AdminCreateForm/>
        }
        const { user, admin } = this.state

        return(
            <div>
                { admin ? (
                    <div className='test'>
                        <h1 className='admintitle'>Salut Admin</h1>
                        <p>Salut Admin</p>
                        <div className="Listusers">
                            { UsersList }
                        </div>
                        <div className='testButton'>
                            <button className='button' onClick={this.delUserList}>Test</button>
                        </div>

                    </div>
                ) : (
                    <div className='testadminFalse'>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                        <h1>t'as pas le droit</h1>
                    </div>
                ) }
            </div>
        )
    }
}