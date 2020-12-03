import React,{useState} from 'react';
// import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {logIn} from '../../JS/actions/index'




const LogIn = () => {
    const loading = useSelector((state) => state.userReducer.loading);
    const loggedUser = useSelector((state) => state.userReducer.loggedUser);


    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const logUser = () => {
        dispatch( 
          logIn({
            
            email,
            password,
            
          })
        );
      };


    return loggedUser  ? (
        // <Redirect to='/profile/:id' />
        (loggedUser.role =='user')? (<Redirect to='/profile/:id' />) : (<Redirect to='/admin' />)
      ) : loading ? (
        <img  src="https://3wga6448744j404mpt11pbx4-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif" alt="Loading ..." />
      ) : ( <div>
                <h1>Log In</h1>

        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email ..."/>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="**********" />

       <div onClick={logUser}> Log In </div>

             
    </div> );
}
 
export default LogIn;