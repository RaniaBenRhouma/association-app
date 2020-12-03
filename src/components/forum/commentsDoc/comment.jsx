import React from 'react';


const Comment = (props) => {
    
    
    return ( <div className="commentDiv">
        
        <strong> {props.elm.userC} </strong>
        <p>{props.elm.contentC} </p>
        <div>Delete</div>
        
    </div> );
}
 
export default Comment;