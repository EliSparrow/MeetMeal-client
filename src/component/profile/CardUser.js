import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class CardUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props._id,
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
        this.setState({
            _id: this.props._id,
            lastname: this.props.lastname,
            firstname: this.props.firstname,
            age: this.props.age,
            avatar: this.props.avatar,
            bio: this.props.bio,
            lovestatus: this.props.lovestatus,
            zipcode: this.props.zipcode,
            address: this.props.address,
            city: this.props.city,
            toquesAvailable: this.props.toquesAvailable
        })
    }

    render() {
        const {
            lastname,
            firstname,
            age,
            avatar,
            bio,
            lovestatus,
            zipcode,
            address,
            city,
            toquesAvailable
        } = this.state;
        return (
            <div className="card mb-4 card-user-list">
                <Link to={"/users/"+this.state._id} >
                <img className="card-img card-img-list"  src= { avatar } alt="Card image cap" />
                </Link>
                <div className="card-body">
                    <Link to={"/users/"+this.state._id}><h5 className="card-title">{ firstname } { lastname }</h5></Link>
                    <p className="card-text">Age:  { age }</p>
                </div>
            </div>
        )
    }
}

export default CardUser