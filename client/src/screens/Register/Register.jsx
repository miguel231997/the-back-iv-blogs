import { useState } from 'react';
import './Register.css'

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
      
    <form className="register-form center pa5 br2-ns b--black-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      <label className="white db fw6 lh-copy f6">
        First Name:
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='text'
          name='first_name'
          value={first_name}
          onChange={handleChange}
        />
      </label>
      <label className="white db fw6 lh-copy f6">
        Last Name:
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='text'
          name='last_name'
          value={last_name}
          onChange={handleChange}
        />
      </label>
      <label className="white db fw6 lh-copy f6">
        Username:
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label >
      <br />
      <label className="white db fw6 lh-copy f6">
        Email:
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15" 
        type='text' 
        name='email' 
        value={email} 
        onChange={handleChange} />
      </label>
      <br />
      <label className="white db fw6 lh-copy f6">
        Profile Picture:
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='text'
          name='profile_picture'
          value={profile_picture}
          onChange={handleChange}
        />
      </label>
      <label className="white db fw6 lh-copy f6">
        Password:
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
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
