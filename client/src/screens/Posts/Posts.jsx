import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Posts.css'


export default function Posts(props) {
  const [ allPosts, setAllPosts] = useState([])
  const { posts, handlePostDelete, currentUser } = props;

  useEffect(() => {
    setAllPosts(posts)
  }, [posts])
  
  return (
   <div className = "articlecontainer mt6">
      {currentUser &&
      <>
      <h3>Posts</h3>
      { allPosts.map((post) => (
        
          <div className = "eacharticle" key={post.id}>
            <img src = {post.picture} />
            <Link to={`/posts/${post.id}`}><p>{post.title}</p></Link>
            <Link to={`/posts/${post.id}/edit`}><button>edit</button></Link>
            <button onClick={() => handlePostDelete(post.id)}>delete</button>
          
        </div>
      ))}
      </>
      }
    </div>
  );
}
