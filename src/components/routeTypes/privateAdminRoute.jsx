import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isLogin } from '../utils';
import { useSelector } from 'react-redux';


const PrivateAdminRoute = ({component: Component, ...rest}) => {
    const isConnected = useSelector((state) => state.userReducer.isConnected);
    const loggedUser = useSelector((state) => state.userReducer.loggedUser);
    



////////////////for component admin Dashboard

    return (

        <Route {...rest} render={props => (
            // isConnected && (role==='admin') ?
            //     <Component {...props} />
            // : <Redirect to="/signUp" />
            // (isConnected) ?  ((role ==='admin')? <Component {...props} />  : <Redirect to="/signUp" />)
            (isConnected) ? 
            (<Component {...props} />)
            : (<Redirect to="/signUp" />)

        )} />
    );
};

export default PrivateAdminRoute;