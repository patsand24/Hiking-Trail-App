import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

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
            <Link to="/greaterSeattle">Greater Seattle Trails</Link>
          </li>
          <li>
           <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><button className="btn btn-info log">Log In</button></li>
          <li><button className="btn btn-danger log">Sign Up</button></li>
        </ul>
      </nav>
    );
  }
}

export default Header;