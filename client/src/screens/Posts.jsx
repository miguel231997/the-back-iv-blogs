import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Posts(props) {
  const [ allPosts, setAllPosts] = useState([])
  const { posts, handlePostDelete, currentUser } = props;

  useEffect(() => {
    setAllPosts(posts)
  }, [posts])
  console.log(posts)
  return (
    <div>
      {currentUser &&
      <>
      <h3>Posts</h3>
      { allPosts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <p>{post.title}</p>
            <img src = {post.picture} />
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <button>edit</button>
          </Link>
          <button onClick={() => handlePostDelete(post.id)}>delete</button>
        </div>
      ))}
      <Link to='/posts/new'>
        <button>create</button>
      </Link>
      </>
      }
    </div>
  );
}
