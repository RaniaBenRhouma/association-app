import React, {useState} from 'react'
import { addComment } from '../../../JS/actions/index';
import { useDispatch, useSelector } from 'react-redux';


const PutAComment = ({idPost}) => {

    const loggedUser = useSelector((state) => state.userReducer.loggedUser);
    const dispatch = useDispatch();

    const [inputComment, setInputComment] = useState("");
    // console.log(inputComment);

    return ( <div className="putComment">
        <input  className="commentInput" type="text" onChange={(e) => setInputComment(e.target.value)} placeholder=" Votre commentaire ... "  />
        <div className="submitComment" onClick={()=> {dispatch(addComment(loggedUser.id,idPost,inputComment))}}> Add </div>
    </div> );
}
 
export default PutAComment;