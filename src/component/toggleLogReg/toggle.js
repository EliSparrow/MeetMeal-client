import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import Register from '../register/registerForm';
import Login from '../login/loginForm';

import '../../stylesheets/toggle.css';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.state = {hidden: true};

        this.handleClick = this.handleClick.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
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
                <input type={this.state.hidden ? "password" : "text"}/>
        <button onClick={this.toggleShow}>Show / Hide</button>
      </div>
        );
    }
}

export default withRouter(Toggle)
