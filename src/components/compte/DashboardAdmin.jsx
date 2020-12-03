import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {logOut} from '../../JS/actions/index'


const DashboardAdmin = () => {
    const loggedUser = useSelector((state) => state.userReducer.loggedUser);

    const dispatch = useDispatch();
    const logOutUser = () => {
      dispatch( 
        logOut()
      );
    };


    return ( <div>
                <Link to="/logIn"> <div onClick={logOutUser}><i class="fas fa-sign-out-alt"></i></div></Link>

        <h1>HELLO ADMIN {loggedUser.name} </h1>

    </div> );
}
 
export default DashboardAdmin;