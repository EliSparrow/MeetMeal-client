import React, { Component } from "react";
import { Row } from "react-bootstrap";
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
        toquesAvailable: ""
        }
    }

    componentDidMount() {
        const header = {
            'x-auth-token': sessionStorage.getItem('token')
          }
        axios.get('http://localhost:1509/users', { headers: header })
            .then(response => {
                this.setState({ users: response.data });
                console.log(this.users);
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
                console.log(users);
                return users.map((user, index) => (
                    <CardUser
                        {...user}
                        key={index}
                    />
                ));
            }
        };

        return (
            <div className="container">
                <Row>
                    {renderUsers()}
                </Row>
            </div>
        )
    }
}

export default ListUsers;