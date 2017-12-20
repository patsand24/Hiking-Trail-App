import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';

class Home extends React.Component {
  render() {
		return (
			<div className="home">
			<Header />
				<h1 className="text-center">Seattle Area Hiking Trails</h1>
			</div>
		);
  }
}

export default Home;