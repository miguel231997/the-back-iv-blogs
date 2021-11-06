import { Link } from 'react-router-dom';
import logo from '../p4_logo.png';
import './Layout.css';

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;

  return (
    <div className = "container">
      <div className = "main">
      <header>
        {currentUser ? (
          <div className = "flex">
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className = "image-and-buttons">
            <div className = "logo-landing-page-image">
              <img src = {logo}></img>
            </div>
            <div className = "landing-page-buttons">
              <div>
                <Link className = "login black" to='/login'><button className = "left-button w-100 f6 link dim ba bw1 ph3 pv2 mb2 dib black">Login</button></Link>
              </div>
              <div>
              <Link className = "register white" to='/register'><button className = "right-button w-100 f6 link dim  pv2 mb2 dib white bg-black">Register</button></Link>
              </div>
            </div>
          </div>
        )}
        
        {currentUser && (
          <div>
            <Link to='/posts'>Posts</Link>
            <Link to='/topics'>Topics</Link>
          </div>
        )}
      </header>
      {children}
    </div>
    </div>
  );
}
