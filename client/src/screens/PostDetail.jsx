import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const { posts } = props;

  useEffect(() => {
    if (post.length) {
      const onePost = posts.find((post) => {
        return post.id === Number(id);
      });
      setPost(onePost);
    }
  }, [posts, id]);

  return (
    <div className="profile">
      {post && (
        <>
          <div className="profile-pic">
            <img src={post.picture} alt={post.title} />
          </div>
          <div className="profile-info">
            <p>
              <b>Quote: </b>"{post.content}"
            </p>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
