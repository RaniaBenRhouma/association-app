import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../../JS/actions";
import Comment from "../commentsDoc/comment";
import PutAComment from "../commentsDoc/putComment";

const Post = ({ post }) => {
  // const allComments = useSelector((state) => state.commentReducer.comments);
  // const gettedPUserName = useSelector(
  //   (state) => state.postReducer.gettedPUserName
  // );
  // const loadingP = useSelector((state) => state.postReducer.loading);
  // const loadingC = useSelector((state) => state.commentReducer.loading);
  // const loggedUser = useSelector((state) => state.userReducer.loggedUser);

  // const dispatch = useDispatch();
  // const [localComments, setLocalComments] = useState([]);
  // useEffect(() => {
  //   setLocalComments(allComments.filter((comm) => comm.idPost === post._id));
  //   console.log(`localCommments: ${localComments}`);
  // }, []);

  // // useEffect(() => {
  // //   if (!loadingC) {
  // //     dispatch(getPostUserName(post.idUser));
  // //   }
  // // }, []);

  const [name, setName] = useState('');
  
  const userName = useSelector((state) => state.userReducer.name);
  const loading = useSelector((state) => state.userReducer.loading);
  const loggedUser = useSelector((state) => state.userReducer.loggedUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const getuser = async () => {
      try {
        const userName = await Axios.get(`/user/getUserById/${post.idUser}`);
        // setName([...name, userName.data]);
        setName(userName.data);

      } catch (error) {
        console.error(error);
      }
    };
    getuser()
    // dispatch(getUser(post.idUser));
    // setName(userName);


  }, []);

console.log('name', name)
  return (loading)?
   ( <span> waiting  in post component </span>) : 
   
    (
    <div className="postDiv" key={post._id}>

      <div className="postContent">
      {post.idUser == loggedUser.id ? (
        <div className="deletePBtn" onClick={()=>{dispatch(deletePost(post._id))}} ><i class="fas fa-times"></i></div>
      ) : (<> </>)}

      <h5>{name.name}</h5>
      <p> {post.content} </p>

      </div>

      <hr />

      <div className="commentSection">
        <a id="votre comment"></a>

         <PutAComment idPost={post._id} />

        <div className="commentsPart">

          {post.comments.map((elm) => (
            <Comment comment={elm}  idPost={post._id} />
          ))}

          {/* <p>{post.comments.length} comments</p> */}
          {/* <div><span>See more</span> <span>exp:(12 sur 6 786)</span> </div> */}
          <a href="#votre comment">Votre commentaire...</a>
        </div>
      </div>
    </div>
  );
};

export default Post;
