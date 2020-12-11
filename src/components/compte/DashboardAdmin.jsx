import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {logOut} from '../../JS/actions/index'
import EventAdd from './addAnEvent'

const DashboardAdmin = () => {
    const loggedUser = useSelector((state) => state.userReducer.loggedUser);

    const dispatch = useDispatch();
    const logOutUser = () => {
      dispatch( 
        logOut()
      );
    };


    return ( <div className="dashboardAdmin">
                <Link to="/logIn"> <div onClick={logOutUser}><i class="fas fa-sign-out-alt"></i></div></Link>

        <h1>HELLO ADMIN {loggedUser.name} </h1>
        <EventAdd />
    </div> );
}
 
export default DashboardAdmin;