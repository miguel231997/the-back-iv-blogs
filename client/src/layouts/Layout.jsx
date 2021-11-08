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
          <div className = "nav">
            <div className = "add-article">
              <Link to='/posts/new'>
                <button className = "w-100 f6 link dim ba bw1 ph3 pv2 mb2 dib black">Add an article</button>
              </Link>
            </div>
            <p className = "welcome">Welcome {currentUser.username}</p>
            <p className = "log-out" onClick={handleLogout}>Logout</p>
          </div>
        ) : (
          <div className = "image-and-buttons">
            <div className = "logo-landing-page-image">
              <img src = {logo} alt = "logo"></img>
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
          <div className = "navigation">
            <Link to='/posts' className = "mr4 no-underline">Posts</Link>
            <Link to='/topics'className = "no-underline">Topics</Link>
          </div>
        )}
      </header>
      {children}
    </div>
    </div>
  );
}
