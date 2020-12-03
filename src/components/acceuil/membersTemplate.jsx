import React from "react"

const Members = (props) => {

    
    return ( 

        <div style={{display:"flex", justifyItems:"center" , justifyContent:"space-around", marginLeft:"2%", marginRight:"2%", flexWrap: "wrap"}}>
        {props.members.map(el =>       
            <div className="detail">        
            <img src={el.img} alt="profil" className={el.category}/>
            <h2>{el.name}</h2>
            <h6>{el.func}</h6>
        
        </div>)}

        </div>
    
    );
}
 
export default Members;
