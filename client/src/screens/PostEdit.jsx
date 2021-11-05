import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    picture: '',
  });
  const { title } = formData;
  const { id } = useParams();
  const { posts, handlePostUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      setFormData({
        title: postItem.title,
        content: postItem.content,
        picture: postItem.picture
      })
    };
    if (posts.length) {
      prefillFormData();
    }
  }, [posts, id]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <h1>Edit post</h1>
      <label>
        Title:
        <input type='text' name = "title" value={title} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
