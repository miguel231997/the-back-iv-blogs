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
      
    <form className="registerform center pa5 br2-ns b--black-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3 className="">Register</h3>
    
        
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='text'
          name='first_name'
          value={first_name}
          onChange={handleChange}
          placeholder = 'First Name'
        />
      <div>
      <br />
      </div>
    
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='text'
          name='last_name'
          value={last_name}
          onChange={handleChange}
          placeholder = 'Last Name'
        />
      
      <div>
      <br />
      </div>
        
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
          placeholder = 'username'
        />
      
      <div>
      <br />
      </div>
    
        
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15" 
        type='text' 
        name='email' 
        value={email} 
        onChange={handleChange} 
        placeholder = 'email'
        />
        
      
        <div>
      <br />
      </div>
    
       
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='text'
          name='profile_picture'
          value={profile_picture}
          onChange={handleChange}
          placeholder = 'profile picture'
        />
      
      <div>
      <br />
      </div>
        
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder = 'password'
        />

    <div>
      <br />
      </div>
      <button>Submit</button>
    </form>
    
  );
}
