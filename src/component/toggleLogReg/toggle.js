import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'
import Register from '../register/registerForm';
import Login from '../login/loginForm';

import '../../stylesheets/toggle.css';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    render() {
        return (
            <div className="container " id="container">
                {this.state.isToggleOn ? <Login /> : <Register /> }
            </div>
        );
    }
}

export default withRouter(Toggle)
