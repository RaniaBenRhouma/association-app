import React from "react"
import MyImg from "../../images/logo.png"
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const NavBar = () => {
    const isConnected = useSelector((state) => state.userReducer.isConnected);
    const loggedUser = useSelector((state) => state.userReducer.loggedUser);


    return ( 
        <div className="navig">
            <a id="top"></a>
            <Link style={{textDecoration:"none" }} to="/"><img src={MyImg} alt="logo" /></Link>
           <div>
            <ul className="links">
                <Link style={{textDecoration:"none" , color:"white"}} to="/"><li>Acceuil</li></Link>
                <li>Projects</li>
                <li>Activities</li>
                <li>News</li>
                <li>{isConnected ? 
                ((loggedUser.role =='user')? (<Link to="/profile/:id">Profile</Link>) : (<Link to="/admin">Admin Profile</Link>)):
                (<Link style={{textDecoration:"none", color:"white"}} to="/signUp">Sign Up</Link>)}</li>


            </ul>
           </div>
        </div>
     );
}
 
export default NavBar;