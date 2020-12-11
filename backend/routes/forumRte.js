//get comments and posts on loading forum page (useEffect)

// add/delete a post

// add/delete a comment

const express = require("express");
const User = require("../model/user");
const Post = require("../model/post");
const Comment = require("../model/comment");

const Router = express.Router();

/// 1-add a post

Router.post(`/addPost`, async (req, res) => {
  const { idUser, content, comments } = req.body;
  try {
    if (!content) return res.json({ msg: `This post is empty !` });

    const newPost = new Post({
      idUser,
      content,
      comments,
    });
    newPost.save();
    res.json(newPost);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

///2-delete a post

Router.delete(`/deletePost/:idPost`, async (req, res) => {
  const { idPost } = req.params;
  console.log(req.params);
  try {
    await Post.findByIdAndDelete(idPost);
    // await Comment.deleteMany({ idPost: idPost });
    const restPosts = await Post.find();
    res.json(restPosts);
  } catch (error) {
    console.error(error);
    res.json({ errors: error });
  }
});

///3-add a comment

Router.post(`/addComment`, async (req, res) => {
  const { idUser, idPost, content } = req.body;
  // console.log(req.body)
  try {
    if (!content) return res.json({ msg: `This comment is empty !` });
    const post = await Post.findById(idPost);
    post.comments.push({ idComment: Date.now(), idUserC: idUser, content });
    const newPost = await Post.findByIdAndUpdate(idPost, {
      //update the post with the new comment
      comments: post.comments,
    });
    res.json(post.comments);
    // const newComment = new Comment({
    //   idUser,
    //   idPost,
    //   content,
    // });
    // newComment.save(); //save the new comment
    //   console.log( newComment);
    // const commentedPost = await Post.findById(idPost); //find the commented post
    //   console.log( commentedPost);
    // commentedPost.comments.push(newComment._id); // and the  new comment id to the idsComment tab
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

///4-delete a comment

Router.delete(`/deleteComment/:idComment/:idPost`, async (req, res) => {
  const { idComment, idPost } = req.params;
  // console.log({ idComment, idPost });
  try {
    // const commentToDelete = await Comment.findById(idComment); // njib elcomment
    const post = await Post.findById(idPost);
    const upDateComments = post.comments.filter((el) => {
      return el.idComment != idComment;
    });

    const updatedPost = await Post.findByIdAndUpdate(idPost, {
      comments: upDateComments,
    });
    // console.log("updated comments", upDateComments);
    // console.log("updated post", updatedPost);

    res.json(upDateComments);

    // const relatedPost = await Post.findById(commentToDelete.idPost); // njib minou related post

    // // nfasa5 min tableau des comments of related post l'id mta3 elcomment to delete

    // let commentsIdsArray = relatedPost.comments;

    // if (commentsIdsArray.indexOf(idComment) == -1)
    //   return res.json({ msg: `This comment does not exist !` });

    // commentsIdsArray = commentsIdsArray.filter((id_el) => id_el != idComment);
    // // console.log(commentsIdsArray)

    // await Post.findByIdAndUpdate(commentToDelete.idPost, {
    //   comments: commentsIdsArray,
    // }); // id comment deleted from the array comments of the related post

    // await Comment.findByIdAndDelete(idComment); // the comment is deleted from DB
    // const restComments = await Comment.find();
  } catch (error) {
    console.error(error);
    res.json({ errors: error });
  }
});

///5-get Posts

Router.get(`/getPosts`, async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

///6-get the comments
///*** then of specific posts

// Router.get(`/getComments`, async (req, res) => {
//   try {
//     const comments = await Comment.find();

//     res.status(200).json(comments);
//   } catch (error) {
//     console.error(error);
//     res.json(error);
//   }
// });

//get comment's userName // send id comment return its user name

Router.get(`/getCommentUserName`, async (req, res) => {
  const { idUserC } = req.body;
  // console.log (idComment)
  try {
    // const commentTosearchItsUserName = await Comment.findById(idComment);
    // if (commentTosearchItsUserName===null) return res.json({msg:'This comment does not exist in DB'});
    const commentUser = await User.findById(idUserC);

    // const payload={

    //   idComment:idComment,
    //   idUserComment: commentUser._id,
    //   nameUserComment: commentUser.name,
    // }
    const nameUserComment = commentUser.name;

    res.status(200).json(nameUserComment);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

//get post's userName // send id post return its user name

Router.get(`/getPostUserName`, async (req, res) => {
  const { idUserP } = req.body;
  // console.log(req.body);
  try {
    // const postTosearchItsUserName = await Post.findById(idPost);
    // if (postTosearchItsUserName===null) return res.json({msg:'This post does not exist in DB'});

    const postUser = await User.findById(idUserP);

    // const payload={
    //   idPost:idPost,
    //   idUserPost: postUser._id,
    //   nameUserPost: postUser.name,
    // }
    const nameUserPost = postUser.name;

    res.status(200).json(nameUserPost);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

module.exports = Router;
