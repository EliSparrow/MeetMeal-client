import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

export class CardUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <Col md={12}>
                <Card>
                <Card.Header as="h3">{lastname}</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            {firstname}
                        </Card.Title>
                        <Card.Text>
                            { age } { avatar } { bio } { lovestatus } { zipcode }
                            <br/>
                            <p>
                            address: { address }
                            </p>
                            <br/>
                            <p>
                            city: { city }
                            </p>
                            <br/>
                            
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        { toquesAvailable }
                    </Card.Footer>
                </Card>
            </Col>
        )
    }
}

export default CardUser