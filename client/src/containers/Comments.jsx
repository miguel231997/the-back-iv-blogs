import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Comments(props) {
  const [ allComments, setAllComments] = useState([])
  const { comments, id } = props;

  useEffect(() => {
    setAllComments(comments.filter(comment => comment.post_id === Number(id)))
  }, [comments])
  console.log(comments)
  
  return (
    <div>
    
      <>
      <h3>Comments</h3>
      { allComments.map((comment) => (
        <div key={comment.id}>
          
            <p>{comment.content_comment}</p>
    
        </div>
      ))}
      <Link to='/comments/new'>
        <button>create</button>
      </Link>
      </>
      
    </div>
  );
}