import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Comments from "../../containers/Comments";
import { deletePost, getPost } from '../../services/posts';
import { addCommentToPost } from '../../services/comments'
import './PostDetail.css'


export default function PostDetail(props) {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [ selectedComment, setSelectedComment ] = useState({content_comment: ''})
  const { id } = useParams();
  const history = useHistory();

  const {comments, currenUser} = props;
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

  const handleChange = (e) => {
    const {name, value} = e.target;
    setSelectedComment({
      ...selectedComment,
      [name]: value
    })
  }
  const handleDelete = async () => {
    await deletePost(post._id);
    history.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postItem = await addCommentToPost(selectedComment, id);
    setPost(postItem);
  };
  
  return (
    
    <div className="article mt6">
      
      {post && (
        <>
          <div className="content-title">
            <img src={post.picture} alt={post.title} />
          </div>
          <div className="content-text">
            <p>
              <b></b>"{post.content}"
            </p>
            <div className = "button-container">
              <Link to="/">
                <button className="f6 link dim ba bw1 ph3 pv2 mb2 dib black" >Home</button>
              </Link>
              <div className="">
            <button
              className="f6 link dim ba bw1 ph3 pv2 mb2 dib black"
              onClick={handleDelete}
            >
              Delete
            </button>
            </div>
        </div>
          </div>
          <Comments id = { id } comments = {post? post.comments:[]} />
          <form className = "comment-area" onSubmit={handleSubmit}>
            <textarea name = 'content_comment' onChange = {handleChange} value = {selectedComment.content_comment} />
            <button className = "w-50n center f6 link dim ba bw1 ph3 pv2 mb2 dib black">Add a comment</button>
          </form>
      
        </>
      )}
      
    </div>
      
  );
      
}
