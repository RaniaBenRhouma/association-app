import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../../JS/actions";

import Post from "./post";

const PostDiv = () => {
  const dispatch = useDispatch();
  // const [posts, setPosts]= useState ([ {id:1, contentP:"tatatattatataPost1" , userP:"mark stark", comments:[{userC:"Nancy",contentC:"hhh"},{userC:"Rania",contentC:"yaaaaap haaaay"}]}
  // ,{id:2, contentP:"test2 7awil 7awil" , userP:"Jane Smith", comments:[{userC:"Elissa",contentC:"llaaaalalalalllla"},{userC:"Donald Trump",contentC:"let's  make America greaaaat again"}]}

  // ])
  const isLoadingPost = useSelector((state) => state.postReducer.loading);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const Allposts = useSelector((state) => state.postReducer.posts);
  const Allcomments = useSelector((state) => state.commentReducer.comments);
  const isLoading = useSelector((state) => state.commentReducer.loading);
  return isLoadingPost ? (
    <h1>wait</h1>
  ) : (
    <div className="postsDiv">
      {Allposts&& Allposts.map((el) => (
        <div>
          <Post post={el} />
        </div>
      ))}
    </div>
  );
};

export default PostDiv;
