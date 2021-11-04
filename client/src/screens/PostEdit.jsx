import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { id } = useParams();
  const { posts, handlePostUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      setFormData({
        name: postItem.name
      })
    };
    if (posts.length) {
      prefillFormData();
    }
  }, [posts, id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, formData);
      }}
    >
      <h1>Edit post</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
