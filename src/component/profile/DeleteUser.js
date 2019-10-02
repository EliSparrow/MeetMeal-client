import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export class DeleteUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            userShow: null,
            userConnected: null,
            isDesactivated: false
        };
    }
    
    componentDidMount() {
        const header = {
            'x-auth-token': localStorage.getItem('token')
        }
        Axios.get(process.env.REACT_APP_API + '/users/' + this.props.match.params.id,{ headers: header})
            .then(res => {
                this.setState({ userShow: res.data });
            })
            .catch(err => {
                console.error(err)
            })
            this.getUser()
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

        handleDeleteUser = () => {
            console.log(this.state.userShow._id);
        const header = {
            'x-auth-token': localStorage.getItem('token')
        }
        this.setState({ isDesactivated : true }, function () {
            console.log(this.state.isDesactivated);
            var deleteUser = {
                isDesactivated: this.state.isDesactivated
            }
            Axios.put(process.env.REACT_APP_API + `/users/`+ this.state.userShow._id, deleteUser, { headers: header })
            .then(res => {
                alert('Le profil est désormais bloqué');
                this.setState({ userShow: res.data });
                if (this.state.userShow._id == this.state.userConnected._id){
                    localStorage.removeItem('token');
                    this.props.history.push('/');
                }
                else{
                    this.props.history.push('/admin');
                }
            })
            .catch(err => {
                console.error(err.response);
            })
        });
    }

    render() {
        var { userShow } = this.state
        return(
            <div className="container-fluid">
                { userShow ? (
                    <div className='deleteUser'>
                        <h2>Vous êtes sur le point de bloquer votre compte</h2>
                        <button className="delete" onClick={this.handleDeleteUser}>Bloquez votre compte</button>
                        <button className="reset"><Link to='/profile'>Annuler</Link></button>
                    </div>
                ) : null }
            </div>
        )
    }
}