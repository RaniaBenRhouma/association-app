import React, {useState} from 'react';
import Post from './post';

const PostDiv = () => {
const [posts, setPosts]= useState ([ {id:1, contentP:"tatatattatataPost1" , userP:"mark stark", comments:[{userC:"Nancy",contentC:"hhh"},{userC:"Rania",contentC:"yaaaaap haaaay"}]}
,{id:2, contentP:"test2 7awil 7awil" , userP:"Jane Smith", comments:[{userC:"Elissa",contentC:"llaaaalalalalllla"},{userC:"Donald Trump",contentC:"let's  make America greaaaat again"}]}

])


    return ( <div>
        
        
        <div className="postsDiv" >
              
              {posts.map(el=> <div>
                  <Post el={el} />
              </div>)}  
        </div>

    </div> );
}
 
export default PostDiv;