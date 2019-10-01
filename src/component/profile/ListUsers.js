import React, { Component } from "react";
import { CardUser } from "./CardUser";
import axios from 'axios';


export class ListUsers extends Component {
    constructor(props){
        super(props);

        this.state = {
        users: [],
        lastname:"",
        firstname: "",
        age: 0,
        avatar: "",
        bio: "",
        lovestatus: "",
        zipcode: 0,
        address: "",
        city: "",
        toquesAvailable: "",
        search: ""
        }
    }

    componentDidMount() {
        const header = {
            'x-auth-token': localStorage.getItem('token')
          }
        axios.get('http://localhost:1509/users', { headers: header })
            .then(response => {
                console.log(response.data);
                this.setState({ users: response.data });
            })
            .catch(err => {
                console.error(err);
            })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleSubmit = async(event) => {
        const header = {
            'x-auth-token': localStorage.getItem('token')
          }
        event.preventDefault();
        console.log(this.state.search);
        axios.post('http://localhost:1509/search/users',{ search: this.state.search },{ headers: header })
            .then(response => {
                console.log(response.data.result);
                this.setState({ users: response.data.result })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        var { users } = this.state;

        var renderUsers= () => {
            if(users.length === 0) {
                return <div>{ users }</div>
            } else {
                return users.map((user, index) => (
                    <div>
                    <CardUser
                        {...user}
                        key={user._id}
                        index={index}
                        />
                    </div>
                ));
            }
        };

        return (
            <div className="container">
                <form className="form-search" onSubmit={this.handleSubmit}>
                    <div className="searchInput">
                        <input type="text" placeholder="Entrez un utilisateur" className="input-search" name="search" onChange={this.handleChange} />
                        <button className="submit">Search</button><br/><br/>
                    </div>
                </form>
                <div className='row'>
                    <div className="card-deck">
                    {renderUsers()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListUsers;