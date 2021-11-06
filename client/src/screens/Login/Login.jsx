import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        Password:
        <input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-15"
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className = "submit-button center f6 link dim ba bw1 ph3 pv2 mb2 dib black">Submit</button>
    </form>
  );
}
