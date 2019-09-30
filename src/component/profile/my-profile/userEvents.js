import React, { Component } from "react";

import EventsCreated from './eventsCreated';
import EventsJoined from './eventsJoined';

class UserEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    showJoinedEvents(event, status) {
        status = false;
        console.log(status)
    }

    showCreatedEvents(event, status) {
        status = true;
        console.log(status)
    }

    render() {
        var status = true; 
        return (
            <div className="container">
                <button type="button" onClick={this.showCreatedEvents}>Repas créés</button>
                <button type="button" onClick={this.showJoinedEvents}>Repas rejoints</button>
                {status == true ? <EventsCreated/> : <EventsJoined/>}
            </div>
        )
    }
}

export default UserEvents;