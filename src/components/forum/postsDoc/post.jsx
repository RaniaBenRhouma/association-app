import React from 'react';
import Comment from '../commentsDoc/comment';

// {id:2, contentP:"test2 7awil 7awil" , userP:"Jane Smith", comments:[{userC:"Elissa",contentC:"llaaaalalalalllla"},{userC:"Donald Trump",contentC:"let's  make America greaaaat again"}]}


const Post = (props) => {
    return ( <div className="postDiv">

        <h4>{props.el.userP}</h4>
        <p> {props.el.contentP} </p>
                        <p>Delete</p>
                        
        <div className="commentSection">

            <a id="votre comment"></a>
            <div className="inputCommentDiv">
            <input className="inputComment" type="text" placeholder=" Votre commentaire ... " />
            <div className="BtnAddComment">Add</div>
            </div>

            <div className="commentsPart"> 

            {/* existed comments for this post +
            
            "see more"  (12 sur 6 786)    +
            
            "Votre commentaire ...  :lien vers le haut"
            */}

            {props.el.comments.map(elm=> <div>

                <Comment elm={elm} />
            </div>)}
                        <div><span>See more</span> <span>exp:(12 sur 6 786)</span> </div>
                        <a href="#votre comment">Votre commentaire...</a>
            </div>

        </div>

    </div> );
}
 
export default Post;