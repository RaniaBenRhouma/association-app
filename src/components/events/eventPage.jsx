import React, { useEffect } from 'react';
import EventsCf from './eventsConfig/eventsC';
import {getEvents} from '../../JS/actions/index'
import { useDispatch, useSelector } from 'react-redux';

//njib lista mta3 events elkol
const EventPage = () => {
  
  const choosenEventsIdsArr = useSelector((state) => state.userReducer.loggedUser.choosenEvents);

    const eventsD = useSelector((state) => state.eventReducer.events);

    const dispatch= useDispatch();
    
    useEffect (() => {
      
      dispatch(getEvents());
    
    }, []);

////btn participate w unparticipate bech iyzidou w iynaksou mil tableau choosen event ids
///bech tbidil valeur choosen events id tab fi fil user reducer
    return ( <>
        <div className="EventsBox">
             <header className="EventHeader"> EVENTS</header>

             { ((eventsD===null) || (choosenEventsIdsArr===null))  ?
          (<img className="loadingEvents" src="https://gifimage.net/wp-content/uploads/2018/04/loading-gif-orange-10.gif" alt="loading"/>) :
                 (eventsD.length ===0) ? (<p>No events yet</p>):
          ( <>
            <em>There is {eventsD.length} events</em>
            <EventsCf arrayToConf={eventsD} />  </> )
          }
          
             </div>
             
             <div className="EventArchiveBox">
             <header className="EventArchiveHeader">EVENTS ARCHIVES  
             <a href="#top"><i class="fas fa-chevron-up"></i></a>
             </header>
             
             <p>No Archived Events Yet</p>
             
             </div>

    </> );
}
 
export default EventPage;