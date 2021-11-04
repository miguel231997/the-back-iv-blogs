import { useState } from 'react';

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    tile: '',
    content: '',
  });
  const { title, content } = formData;
  const { handlePostCreate } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h1>Create Post</h1>
      <label>
        Title:
        <input type='text' value={title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Content:
        <input type='text' value={content} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
