import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {signUp} from '../../JS/actions/index'

const SignUp = () => {
    const loading = useSelector((state) => state.userReducer.loading);
    const user = useSelector((state) => state.userReducer.user);

    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const addUser = (e) => {
      e.preventDefault();
        dispatch( 
          signUp({
            name,
            email,
            password,
            phoneNumber,
          })
        );
      };
    
    return ( <div>
      {loading ? (
        <img  src="https://3wga6448744j404mpt11pbx4-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif" alt="Loading ..." />
      ) : user ? (
        <Redirect to='/logIn' />
      ) : (
      <div className="signPage">
        <h1>Sign Up</h1>
        <div><input type="text" name='name' onChange={(e) => setName(e.target.value)} placeholder="Your Name ..."/></div>
        <div><input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Your Email ..."/></div>
        <div><input type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="**********" /></div>
        <div><input type="tel" name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} placeholder=" Your Number Phone" /></div>

          <div> <button onClick={(e)=>addUser(e)}> Sign Up </button></div>

           <Link to="/logIn"><p>Already have an account ?</p></Link>
               </div>
      )}
    </div> )
}
 
export default SignUp;