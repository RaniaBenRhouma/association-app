import React, { useEffect } from 'react';
import EventsCf from './eventsConfig/eventsC';


const EventPage = () => {


    return ( <>
        <div className="EventsBox">
             <header className="EventHeader"> EVENTS</header>
             
             <EventsCf />
             
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