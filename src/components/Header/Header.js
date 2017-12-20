import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import { login, logout, isLoggedIn } from '../../utils/AuthService';

class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/seattle">Seattle Trails</Link>
          </li>
          <li>
            {
            (isLoggedIn() ) ? <Link to="/greaterSeattle">Greater Seattle Trails</Link> : ''
            }
          </li>
          <li>
           <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            {
            (isLoggedIn()) ? ( <button className="btn btn-info log" onClick={() => logout()}>Log Out </button> ) : ( <button className="btn btn-info log"onClick={() => login()}>Log In</button> )
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;