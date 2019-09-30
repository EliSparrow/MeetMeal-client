import React, { Component } from "react";

import EventsCreated from './eventsCreated';
import EventsJoined from './eventsJoined';

class UserEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: true
        };
    }

    showJoinedEvents = (event) => {
        event.preventDefault();
        this.setState({status: false})
        console.log('SHOW JOINED EVENTS SO MUST BE FALSE : ', this.state.status)
    }

    showCreatedEvents = (event, status) => {
      event.preventDefault();
      this.setState({status: true})
      console.log('SHOW JOINED EVENTS SO MUST BE TRUE : ', this.state.status)
    }

    render() {
        console.log('status : ', this.state.status);
        return (
            <div className="container">
                <button type="button" onClick={this.showCreatedEvents}>Repas créés</button>
                <button type="button" onClick={this.showJoinedEvents}>Repas rejoints</button>
                {this.state.status == true ? <EventsCreated/> : <EventsJoined/>}
            </div>
        )
    }
}

export default UserEvents;
