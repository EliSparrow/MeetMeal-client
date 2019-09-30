import React, { Component } from "react";
import '../../../../src/stylesheets/profile/my-profile/eventsJoined.css'

class EventsJoined extends Component {

render() {
    return(
        <div className="group">
            <div className="profile">
                <div className="picture">
                    <p>photo here</p>
                </div>
                <div className="name-lastname">
                    <p> prenom nom here </p>
                </div>
                <div className="age">
                    <p>age here</p>
                </div>
            </div>

            <div className="info_event">
                <div className="title">
                    <p>title here : Evenement rejoint</p>
                </div>
                <div className="descrption">
                    <p>lorem ipsum</p>
                </div>
                <div className="city_zipcode">
                    <p>Paris 75013</p>
                </div>
            </div>

            <div className="info_guest">
                <div className="number_guest">
                    <p>number guest for the events</p>
                </div>
                <div className="number_registered">
                    <p>number registred people for the event</p>
                </div>
            </div>

            <div className="register">
                <p>register here</p>
            </div>
        </div>
        )
    }
}

export default EventsJoined;
