import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {logOut,getProfile} from '../../JS/actions/index'
import ChoosenEventsConf from './choosenEventC/choosenEventsConf'

const ChoosenEvents = () => {

    const loading = useSelector((state) => state.userReducer.loading);
    const loggedUser = useSelector((state) => state.userReducer.loggedUser);
    const choosenEventsArray = useSelector((state) => state.userReducer.choosenEventsD);


    const dispatch = useDispatch();
    
    const[dat, setDat]= useState(`${Date().slice(0,24)}`);

    useEffect (() => {
      if (!loading){
       dispatch(getProfile(loggedUser.id));
      }
      }, []);

      useEffect(()=> {
        setTimeout(()=>{setDat(Date().slice(0,24));},1000);
        
      }, [dat]);

    const logOutUser = () => {
      dispatch( 
        logOut()
      );
    };
// njib lista ken mta3 choosen events de user

    return ( <>
              <em>{dat}</em>
              <Link to="/logIn"> <div onClick={logOutUser}><i class="fas fa-sign-out-alt"></i></div></Link>
             <h1>WELCOME , {loggedUser.name} </h1>

             <div className="EventChoosenBox">
             <header className="ChoosenEventHeader"> CHOOSEN EVENTS</header>
             
             {/* SELON LE length DE TABLEAUX DE CHOSEN EVENTS AFFICHE
              'no chosen event yet' ou affiche nombre de chosen events */}
              
            { ( choosenEventsArray===null) ?
          (<img className="loadingChoosenEvent" src="https://gifimage.net/wp-content/uploads/2018/04/loading-gif-orange-10.gif" alt="loading"/>) :
                 (choosenEventsArray.length ===0) ? (<p>No choosen events yet</p>):
          ( <>
            <em>There is {choosenEventsArray.length} choosen Events</em>
            <ChoosenEventsConf arrayToConf={choosenEventsArray} />  </> )
          
          }
             
             </div>
    
    </> );
}
 
export default ChoosenEvents;