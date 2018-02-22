import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';

class About extends React.Component {
  render() {
		return (
			<div className="about">
				<Header />
				<h2>Purpose of this Application</h2>
				<p>The purpose of this application is to have an easy and convenient way to find good hiking trails in the greater Seattle area.</p>
			</div>
		);
	}
}

export default About;