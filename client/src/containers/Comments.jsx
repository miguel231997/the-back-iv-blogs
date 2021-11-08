
import { useState, useEffect } from 'react';
import './Comments.css'



export default function Comments(props) {
  const [ allComments, setAllComments] = useState([])
  const { comments, id } = props;

  useEffect(() => {
    setAllComments(comments.filter(comment => comment.post_id === Number(id)))
    // eslint-disable-next-line
  }, [comments, props.setToggle])
  
  
  
  return (
    <div className = "comment-content ba b--silver">
    
      <>
      <h3>Comments</h3>
      { comments.map((comment) => (
<div key={comment.id}>
<div className="posts">
<div className="information">
  <img className ="avatar" src={comment?.user?.profile_picture} alt="profile pic"></img>
    <div className="timestamp">
      <h4>{comment?.user.username}</h4>
        
          </div>
            </div>
              <div className = "post-text">
                <p>{comment?.content_comment}</p>
                  <hr/>
          </div>
        
  </div>
</div>




        // <div key={comment.id}>
          
        //     <p>{comment.content_comment}</p>
        //     <p>{comment.user.username}</p>
        //     <img src = {comment.user.profile_picture}></img>
    
        // </div>
      ))}
      </>
      
    </div>
  );
}