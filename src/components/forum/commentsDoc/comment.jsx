import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, getCommentUserName } from "../../../JS/actions/index";

///comparaison entre idUserName and idLoggedUser to affiche or not delete / to change tha affichage

const Comment = ({ comment , idPost }) => {

  const loggedUser = useSelector((state) => state.userReducer.loggedUser);
  const userName = useSelector((state) => state.userReducer.name);
  const loading = useSelector((state) => state.userReducer.loading);



  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect(() => {

    const getuser = async () => {
      try {
        const userName = await Axios.get(`/user/getUserById/${comment.idUserC}`);
        // setName([...name, userName.data]);
        setName(userName.data);

      } catch (error) {
        console.error(error);
      }
    };
    getuser()
    // dispatch(getUser(comment.idUserC));
    //  setName(userName);

  }, []);


  // const gettedCUserName = useSelector(
  //   (state) => state.commentReducer.gettedCUserName
  // );
  // const loadingC = useSelector((state) => state.commentReducer.loading);
  // const loggedUser = useSelector((state) => state.userReducer.loggedUser);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCommentUserName(elm.idUser));
  // }, [dispatch]);

  // return loadingC ? (
  //   <span>wait</span>
  // ) : (
  //   <div className="commentDiv" key={elm._id}>
  //     {/* <strong> {gettedCUserName.nameUserComment} </strong> */}
  //     <p>{elm.content} </p>
  //     {elm.idUser == loggedUser.id && <div className="deleteCBtn">Delete</div>}
  //   </div>
  // );
console.log('name', name)
  return loading ? (
    <span> wait in comment component </span>
  ) : (
    <div className="commentModel" key={comment.idComment}>
            {comment.idUserC == loggedUser.id ? (
        <div className="deleteCBtn" onClick={()=> {dispatch(deleteComment(comment.idComment, idPost))}}><i class="fas fa-times"></i></div>
      ) : (
        <> </>
      )}

      <h5>{name.name}</h5>
      <p>{comment.content}</p>

    </div>
  );
};

export default Comment;
