import React, { Component, Fragment } from "react";
import '../../../../src/stylesheets/profile/my-profile/eventsJoined.css'

class EventsJoined extends Component {

render() {
    return(
        <Fragment>
            <div className="row">
                <div className="col-lg-8">
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
            </div>

            <div className="row">
                <div className="col-lg-8">
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
            </div>

            <div className="row">
                <div className="col-lg-8">
                <div className="number_guest">
                    <p>number guest for the events</p>
                </div>
                <div className="number_registered">
                    <p>number registred people for the event</p>
                </div>
                </div>
            </div>

        </Fragment>
        )
    }
}

export default EventsJoined;
