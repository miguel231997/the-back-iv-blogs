import { useState, useEffect } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
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
  }, [id, props.toggle]);

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
    props.setToggle(prevState => !prevState)
    setUpdated(updated);
  };

  if (isUpdated) {
    
    return <Redirect to={`/posts`} />;
    
  }
  return (
    <div user={props.currentUser}>
      {props.currentUser &&
      <div className="mt6">
        <h1 className="">Edit Your Post</h1>
        <div className="">
          <div className="">
            <input
            placeholder="IMG url"
              className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
              value={post.picture}
              name="picture"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="">
            <form className="" onSubmit={handleSubmit}>
              <div className="">
                <label className=""></label>
                <input
                  autoFocus
                  className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
                  placeholder="Title"
                  value={post.title}
                  name="title"
                  required
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="">
                <label className="">
                  
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
        <div className = "button-container">
              <Link to="/posts">
                <button className="f6 link dim ba bw1 ph3 pv2 mb2 dib black" >Home</button>
              </Link>
              </div>
      
      </div>
}
    </div>
  );
}
