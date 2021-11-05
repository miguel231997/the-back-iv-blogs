import { useState } from 'react';


export default function Register(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    profile_picture: '',
    password: '',
  });
  const { first_name, last_name, username, email, profile_picture, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
      
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      <label>
        First Name:
        <input
          type='text'
          name='first_name'
          value={first_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          name='last_name'
          value={last_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input type='text' name='email' value={email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Profile Picture:
        <input
          type='text'
          name='profile_picture'
          value={profile_picture}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
    
  );
}
