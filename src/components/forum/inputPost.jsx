import React , {useState} from 'react'
import { addPost } from '../../JS/actions';
import { useDispatch, useSelector } from 'react-redux';


const InputPost = () => {

    const loggedUser = useSelector((state) => state.userReducer.loggedUser);
    const dispatch = useDispatch();

    const [inputPost, setInputPost] = useState();

    return ( <div className="putPost">
        <input  className="postInput" type="text" onChange={(e) => setInputPost(e.target.value)} placeholder=" What's you want to say ? "  />
        <div className="submitPost" onClick={()=> dispatch(addPost(loggedUser.id,inputPost))}> Add Post </div>
    </div> );
}
 
export default InputPost;