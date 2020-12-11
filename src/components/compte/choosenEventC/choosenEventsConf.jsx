import React from 'react'
import ChoosenEvent from './choosenEventDiv'

const ChoosenEventsConf = (props) => {

    return ( <div className="eventsDiv">

    {props.arrayToConf.map(el=> 
            <ChoosenEvent el={el} />

     )}

</div> 
);
}

export default ChoosenEventsConf;