import React, { Component, Fragment } from "react";


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
    }

    showCreatedEvents = (event, status) => {
      event.preventDefault();
      this.setState({status: true})
    }

    render() {
        console.log('status : ', this.state.status);
        return (
            <Fragment>
                <nav className='nav-user-profile row'>
                    <div className="col-md-6">

                    <button type="button" onClick={this.showCreatedEvents}>Repas créés</button>
                    </div>
                    <div className="col-md-6">
                    <button type="button" onClick={this.showJoinedEvents}>Repas rejoints</button>
                    </div>
                </nav>
                <div className='row user-cards list-events'>
                {this.state.status == true ? <EventsCreated/> : <EventsJoined/>}
                </div>
            </Fragment>
        )
    }
}

export default UserEvents;
