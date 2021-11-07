import { useState } from 'react';
import { postPost } from '../services/posts';
import { Redirect } from "react-router-dom";

export default function PostCreate({topics, currentUser}) {
  const [post, setPost] = useState({
    title: '',
    content: '',
    picture: '',
    topic_id: ''
  });
  const [isCreated, setCreated] = useState(false);
  
  console.log(post)
  const handleChange = (e) => {
    const {name, value} = e.target;
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await postPost(post);
    setCreated({created});
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }

  return (
    <div>
      {currentUser && 
      <div className="mt6 create-post">
        <h1 className="">Create Your Post</h1>
        <div className="">
          <div className="">
            <label></label>
            <input 
            placeholder = "image link"
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
              <div className="">
                <label className="">
                  <br />
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
              <select className="" id="topic_id" name="topic_id" onChange={handleChange} style={{width:"auto"}}>
                <option value="">Select from List</option>
                {topics.map(topic => (
                  <option key={topic._id} className="create-thread-data-option" value={Number(topic.id)} >{topic.name}</option>
                ))}
            </select>
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
      }
    </div>
  );
}
