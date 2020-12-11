import React, {useState} from 'react'
import { useDispatch , useSelector } from "react-redux";
import { unparticipate } from "../../../JS/actions/index";


const ChoosenEvent = (props) => {

  const loading = useSelector((state) => state.userReducer.loading);
  const idUser = useSelector((state) => state.userReducer.loggedUser.id);
  const [choosenEventState, setChoosenEventState] = useState(true); // false :not choosen event , true :choosen event 
  const dispatch = useDispatch();

  const UnParticipateHandler = (idEvent) => { 

       if (!loading) {
    
      dispatch( unparticipate({idUser, idEvent}));   //true to false
    
    setChoosenEventState(false);
       }
  }
  

    return (
         <div className="eventDiv" key={props.el._id}>
    <img src={props.el.img} alt="imgEvent" className="eventImg" />
    <h3>{props.el.title}</h3>
    <div>
      <i class="far fa-calendar-alt"></i>
      <h6>{props.el.date}</h6>
    </div>
    <p> {props.el.desc}</p>

{(choosenEventState)? (<div className= "BtnParticipate"
            onClick={() => UnParticipateHandler(props.el._id)} > Unparticipate </div> ) 

            : ( <div className= "BtnParticipate"> Deleted ! </div>)            
}                       
  

    </div> 
   );

  };
export default ChoosenEvent;