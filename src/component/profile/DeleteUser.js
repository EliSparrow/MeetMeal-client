import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class DeleteUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: null,
            isDesactivated: false
        };


    }

    componentDidMount() {

        const header = {
            'x-auth-token': localStorage.getItem('token')
        }
        axios.get('http://localhost:1509/users/my-profile',{ headers: header})
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(err => {
                console.error(err)
            })
    }


    handleDeleteUser = () => {
        const header = {
            'x-auth-token': localStorage.getItem('token')
        }
        this.setState({ isDesactivated : true }, function () {
            console.log(this.state.isDesactivated);
            var deleteUser = {
                isDesactivated: this.state.isDesactivated
            }
            axios.put(`http://localhost:1509/users/`+ this.state.user._id, deleteUser, { headers: header })
            .then(res => {
                alert('Votre profil a été modifié');
                this.setState({ user: res.data });
                localStorage.clear();
                this.props.history.push('/');
            })
            .catch(err => {
                console.error(err.response);
            })
        });
    }

    render() {
        var { user } = this.state
        return(
            <div className="container-fluid">
                { user ? (
                    <div className='deleteUser'>
                        <h2>Vous êtes sur le point de bloquer votre compte</h2>
                        <button className="delete" onClick={this.handleDeleteUser}>Bloquez votre compte</button>
                        <button className="reset"><Link redirect to='/profile'>Annuler</Link></button>
                    </div>
                ) : null }
            </div>
        )
    }
}