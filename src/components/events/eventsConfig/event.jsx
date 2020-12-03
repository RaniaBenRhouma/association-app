import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { participate, unparticipate } from "../../../JS/actions/index";

const Event = (props) => {
  const [eventState, setEventState] = useState(false); // false :not choosen event , true :choosen event
  
//   const dispatch = useDispatch();

//   const ParticipateHandler = (id) => {
//     setEventState(!eventState);
//     if (eventState) {
//       dispatch(participate(id));
//     } else {
//       dispatch(unparticipate(id));
//     }
//   };
  return (
    
    <div className="eventDiv" key={props.el.id}>
      <img src={props.el.img} alt="imgEvent" className="eventImg" />
      <h3>{props.el.title}</h3>
      <div>
        <i class="far fa-calendar-alt"></i>
        <h6>{props.el.date}</h6>
      </div>
      <p> {props.el.desc}</p>

      <div
        className={eventState ? "BtnAlParticipated" : "BtnParticipate"}
        // onClick={() => ParticipateHandler(id)} 
        >

        {eventState ? " already Participated" : "Participate"}
      </div>
    </div>
  );
};

export default Event;
