import React, { Component } from "react";

export class CardUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
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
            <div class="card mb-4" style={{width: 18 + 'em'}}>
                <img class="card-img img-fluid"  src= { avatar } alt="avatar" />
                <div class="card-body">
                    <h5 class="card-title">{firstname} {lastname}</h5>
                    <p class="card-text">Age:  { age } , Description: { bio }, Situation Amoureuse: { lovestatus }, Adresse: { address } { zipcode } { city }</p>
                    <p class="card-text"><small class="text-muted">Toques Disponible: { toquesAvailable }</small></p>
                </div>
            </div>
        )
    }
}

export default CardUser