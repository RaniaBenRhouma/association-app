import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { participate, unparticipate } from "../../../JS/actions/index";

const Event = (props) => {

  const loading = useSelector((state) => state.userReducer.loading);
  const choosenEventsIdsArr = useSelector((state) => state.userReducer.loggedUser.choosenEvents);
  const idUser = useSelector((state) => state.userReducer.loggedUser.id);


  // initial state de l'event hiya reslt de condition existance l'id event in choosen events
  const [eventState, setEventState] = useState(false); // false :not choosen event , true :choosen event 
  const [participationState, setParticipationState] = useState(false); // false :not participated , true :participated 
  
  useEffect (() => { 
    if (choosenEventsIdsArr !==null) {
      setEventState(!((choosenEventsIdsArr.indexOf(props.el._id)) === -1));
      setParticipationState(!((choosenEventsIdsArr.indexOf(props.el._id)) === -1));

    }
  }, []);
  //  !((choosenEventsIdsArr.indexOf(props.el._id)) === -1)

  
  const dispatch = useDispatch();

    //action hethi tib3ath l'id user et event w traja3 list
// eljdida mta3 tableauchoosen events id fil user reducer


  const ParticipateHandler = (idEvent) => { 

    setEventState(!eventState);
       if (!loading) {
    if (participationState) {
      dispatch( unparticipate({idUser, idEvent}));   //true to false

    } else {
      dispatch( participate ({idUser, idEvent}));    //false to true
    }
      
    setParticipationState(!participationState); 

  }

  };

  return (
    
    <div className="eventDiv" key={props.el._id}>
      <img src={props.el.img} alt="imgEvent" className="eventImg" />
      <h3>{props.el.title}</h3>
          {/* {`${participationState}`} */}
      <div>
        <i class="far fa-calendar-alt"></i>
        <h6>{props.el.date}</h6>
      </div>
      <p> {props.el.desc}</p>

      <div
        className={eventState ? "BtnAlParticipated" : "BtnParticipate"}
        onClick={() => ParticipateHandler(props.el._id)} 
        >

        {eventState ? " already Participated" : "Participate"}
      </div>
    </div>
  );
};

export default Event;
