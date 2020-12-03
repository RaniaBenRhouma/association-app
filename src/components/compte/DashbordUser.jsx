import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ChoosenEvents from "./chosenEvents";




const Dashboard = () => {
   const loggedUser = useSelector((state) => state.userReducer.loggedUser);
  
    return ( <div className="dachbrd">

        <section className="profilDivFixe">
           <img className="imgProfile" src={loggedUser.img} alt="profilImg" />
           <h1>{loggedUser.name}</h1>
           <Link to="/forum"><div className="profilDiv1"><strong>Forum</strong></div></Link>
           <Link to="/events"><div className="profilDiv2"><strong>Events</strong></div></Link>
           <Link to="/parameter"><div className="profilDiv3"><strong>Profile setting</strong></div></Link>
        </section>


        <section className="divVar">
             
           <ChoosenEvents/>
            
        </section>

    </div> );
}
 
export default Dashboard;