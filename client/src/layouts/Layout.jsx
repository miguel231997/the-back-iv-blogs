import { Link } from 'react-router-dom';
import logo from '../p4_logo.png';

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;

  return (
    <div>
      <header>
        <img src = {logo}></img>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <div>
              <Link to='/login'>Login</Link>
            </div>
          <Link to='/register'>Register</Link>
          </div>
        )}
        <hr />
        {currentUser && (
          <div>
            <Link to='/posts'>Posts</Link>
            <Link to='/topics'>Topics</Link>
          </div>
        )}
      </header>
      {children}
    </div>
  );
}
