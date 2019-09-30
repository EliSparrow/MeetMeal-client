import React, { Component } from "react";
import '../../../../src/stylesheets/profile/my-profile/eventsCreated.css'

class EventsCreated extends Component {
    render () {
        return (
        <div className="group">
            <div className="info_event">
                <div className="title">
                    <p>title here</p>
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
                <div className="prix">
                    <p>10 Toques</p>
                </div>
            </div>

            <div className="register">
                <p>register here</p>
            </div>
        </div>
        )
    }
}

export default EventsCreated;