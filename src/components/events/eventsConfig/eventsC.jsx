import React from 'react' ;
import Event from './event'

const EventsCf = (props) => {
 
//  const eventsdet=[{ id:1,title:"Rencontre", img:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/127123964_3642554389172148_8663659663932060569_o.jpg?_nc_cat=107&ccb=2&_nc_sid=340051&_nc_ohc=Z-V9t6WKyIgAX-CDffk&_nc_ht=scontent.ftun3-1.fna&oh=8332cf73ae9e187df57dfac33218728a&oe=5FE1E85F", desc:" eerruuibb  hdhddsj khff dfaezh jshelqfazlfal llflbi ",date:"12/08/2020" },{id:2,title:"workshop about the ", img:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/126284602_3626460087448245_6321500239004751671_o.jpg?_nc_cat=111&ccb=2&_nc_sid=340051&_nc_ohc=UsJtoqoTZFgAX9qUbCY&_nc_ht=scontent.ftun3-1.fna&oh=68fb6f0c3bd65a8a8569475779aa48ca&oe=5FE4C1EF", desc:" esdhddjkdfak jhjalb kjll lNN    LNDL /NDN derruuibbi ",date:"13/08/2020" },{ id:3,title:"Rencontre", img:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/127123964_3642554389172148_8663659663932060569_o.jpg?_nc_cat=107&ccb=2&_nc_sid=340051&_nc_ohc=Z-V9t6WKyIgAX-CDffk&_nc_ht=scontent.ftun3-1.fna&oh=8332cf73ae9e187df57dfac33218728a&oe=5FE1E85F", desc:" eerruuibb  hdhddsj khff dfaezh jshelqfazlfal llflbi ",date:"12/08/2020" }]


   return ( <div className="eventsDiv">

            {props.arrayToConf.map(el=> 
        <Event el={el} />

    )}

    </div> 
    
    );
}

export default EventsCf;