import React, {useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import {addEvent} from '../../JS/actions/index'

const EventAdd = () => {
    const [title,setTitle]= useState("");
    const [img,setImg]= useState("");
    const [desc,setDesc]= useState("");
    const [date,setDate]= useState("");
    const dispatch = useDispatch();
    const addAnEvent = (e) => {
      e.preventDefault();
        dispatch(addEvent({title,img, desc,date}));
      };
      const isAdded = useSelector((state) => state.eventReducer.isAdded);


    return isAdded?
                 ( <div className="addedDone">
                 
                 <img src="https://media.tenor.com/images/0eb5ce8db242c968115a7c7425248f69/tenor.gif" alt="DoneWithSuccess" />
                 <h4 className="addedDone"> Done </h4>
                 </div>):
      ( <div className="addAnEvent">
        <h3>Add An Event</h3>
        <div><input type="text" name='title' onChange={(e) => setTitle(e.target.value)} placeholder="Event's tilte ..."/></div>
        <div> <input type="text" name='img' onChange={(e) => setImg(e.target.value)} placeholder="Event's image url ..."/></div>
        <div> <input type="text" name='descr' onChange={(e) => setDesc(e.target.value)} placeholder="Event's description ..."/></div>
        <div> <input type="text" name='date' onChange={(e) => setDate(e.target.value)} placeholder="date Event  dd/mm/yyyy "/></div>
                
             <div>  <button onClick={(e)=>addAnEvent(e)}> Submit Event </button> </div> 


    </div> );
}
 
export default EventAdd;