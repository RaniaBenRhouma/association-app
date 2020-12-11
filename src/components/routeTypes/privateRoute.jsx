import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';
import { useSelector } from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => {

const isConnected = useSelector((state) => state.userReducer.isConnected);
// const role = useSelector((state) => state.userReducer.loggedUser.role);

////////////////for Dashboard User
///add a role in the intial state user reducer default="none" ou take the value loggedUser.role from local storage

    return (


        <Route {...rest} render={props => (
            isConnected ? 
            // (role==='user')? <Component {...props} />  : <Redirect to="/signUp" />
                <Component {...props} />
            : <Redirect to="/signUp" />
        )} />
    );
};

export default PrivateRoute;