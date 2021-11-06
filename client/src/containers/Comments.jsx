import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



export default function Comments(props) {
  const [ allComments, setAllComments] = useState([])
  const { comments, id } = props;

  useEffect(() => {
    setAllComments(comments.filter(comment => comment.post_id === Number(id)))
  }, [comments])
  
  
  
  return (
    <div>
    
      <>
      <h3>Comments</h3>
      { comments.map((comment) => (
        <div key={comment.id}>
          
            <p>{comment.content_comment}</p>
            <p>{comment.user.username}</p>
            <img src = {comment.user.profile_picture}></img>
    
        </div>
      ))}
      </>
      
    </div>
  );
}