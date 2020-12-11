import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import ChoosenEvents from "./chosenEvents";


const Dashboard = () => {

   const loading = useSelector((state) => state.userReducer.loading);
   const loggedUser = useSelector((state) => state.userReducer.loggedUser);

    useEffect (() => {
      if ((loading)|| (loggedUser===null)){
         setTimeout (()=>{},500);
      }
      }, []);


    return  ( <div className="dachbrd">

        <section className="profilDivFixe">
           <img className="imgProfile" src={loggedUser.img} alt="profilImg" />
           <h1>{loggedUser.name}</h1>
           <Link style={{textDecoration:"none"}} to="/forum" ><div className="profilDiv1"><strong>Forum</strong></div></Link>
           <Link style={{textDecoration:"none"}} to="/events"><div className="profilDiv2"><strong>Events</strong></div></Link>
           <Link style={{textDecoration:"none"}} to="/parameter"><div className="profilDiv3"><strong>Profile setting</strong></div></Link>
        </section>
      {/* //   <div className="profilDiv1"> */}
      {/* style={{textDecoration="none"}} */}

        <section className="divVar">
             
           <ChoosenEvents/>
            
        </section>

    </div> );
}
 
export default Dashboard;