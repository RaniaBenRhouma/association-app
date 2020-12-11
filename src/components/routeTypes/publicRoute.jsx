import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PublicRoute = ({component: Component, restricted, ...rest}) => {

    const isConnected = useSelector((state) => state.userReducer.isConnected);

    ////////////for Events Forum components

    return (

        <Route {...rest} render={props => (
            isConnected && restricted ?
             <Component {...props} />
             : <Redirect to="/" />

        )} />
    );
};

export default PublicRoute;