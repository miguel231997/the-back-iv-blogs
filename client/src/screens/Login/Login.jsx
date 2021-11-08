import { useState } from 'react';

import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="log-in-form center pa5 br2-ns b--black-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3>Login</h3>
      
        
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
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          placeholder = 'password'
        />
      
      <br />
      <div>
      <br />
      </div>
      <button className = "submit-button center f6 link dim ba bw1 ph3 pv2 mb2 dib black">Submit</button>
    
    </form>
  );
}
