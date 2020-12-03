import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {logOut,getProfile} from '../../JS/actions/index'


const ChoosenEvents = () => {

    const loggedUser = useSelector((state) => state.userReducer.loggedUser);
    const dispatch = useDispatch();
    
    const[dat, setDat]= useState(`${Date().slice(0,24)}`);

    let id_loggedUser = loggedUser.id;
 
 
    useEffect (() => { dispatch( 
       getProfile({
          id_loggedUser
       })
     );} , []);
 

    const logOutUser = () => {
      dispatch( 
        logOut()
      );
    };


    return ( <>
              <em>{dat}</em>
              <Link to="/logIn"> <div onClick={logOutUser}><i class="fas fa-sign-out-alt"></i></div></Link>
             <h1>WELCOME , {loggedUser.name} </h1>

             <div className="EventChoosenBox">
             <header className="ChoosenEventHeader"> CHOOSEN EVENTS</header>
             {/* SELON LE length DE TABLEAUX DE CHOSEN EVENTS AFFICHE
              'no chosen event yet' ou affiche nombre de chosen events */}
              <p>No choosen events yet</p>
             
             </div>
    
    </> );
}
 
export default ChoosenEvents;