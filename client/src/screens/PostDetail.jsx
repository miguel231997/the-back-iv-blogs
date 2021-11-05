import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { deletePost, getPost } from '../services/posts';

export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading....</h1>;
  }
  const handleDelete = async () => {
    await deletePost(post._id);
    history.push("/");
  };
  return (
    <div className="article">
      {post && (
        <>
          <div className="content-title">
            <img src={post.picture} alt={post.title} />
          </div>
          <div className="content-text">
            <p>
              <b>Quote: </b>"{post.content}"
            </p>
            <Link to="/">
              <button>Home</button>
            </Link>
            <div className="">
          <button
            className=""
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
          </div>
        </>
      )}
    </div>
  );
}
