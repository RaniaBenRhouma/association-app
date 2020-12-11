import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getComments } from "../../JS/actions";
import InputPost from "./inputPost";
import PostsDiv from "./postsDoc/postsDiv";

const Forum = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  // const isLoading = useSelector((state) => state.commentReducer.loading);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!loading) {
  //     dispatch(getComments());
  //   }
  // }, []);

  return (
    <div className="forumPage">
      <header className="forumHeader">Forum</header>
      <InputPost />
      <PostsDiv />
    </div>
  );
};

export default Forum;
