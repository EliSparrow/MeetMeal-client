import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../auth/isAuth.js';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false -> meaning public route
        // restricted = true -> meaning restricted route
        <Route {...rest} render={props => (
            isAuth() && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;
