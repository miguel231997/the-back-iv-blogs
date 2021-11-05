import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { putPost, getPost } from '../services/posts';
import Layout from '../layouts/Layout';


export default function PostEdit(props) {
  
  const [post, setPost] = useState({
    title: '',
    content: '',
    picture: '',
  });
  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await putPost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    
    return <Redirect to={`/posts`} />;
    
  }
  return (
    <div user={props.currentUser}>
      <div className="">
        <h1 className="">Edit Your Post</h1>
        <div className="">
          <div className="">
            <img
              className=""
              src={post.picture}
              alt={post.title}
            />
          </div>
          <div className="">
            <form className="" onSubmit={handleSubmit}>
              <div className="">
                <label className="">post Name</label>
                <input
                  autoFocus
                  className=""
                  placeholder="Title"
                  value={post.title}
                  name="title"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="">
                  post content
                </label>
                <textarea
                  className=""
                  rows={5}
                  cols={78}
                  placeholder="content"
                  value={post.content}
                  name="content"
                  required
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className=""
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
