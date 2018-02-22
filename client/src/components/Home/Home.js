import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header/Header';
import './Home.css';
import Example from "../Carousel";

class Home extends React.Component {
  render() {
		return (
			<div className="home">
				<Header className="header" />
				<div className="main">
					<h1 className="text-center title align-middle">Seattle Area Hiking Trails</h1>
				</div>
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h2 className="text-center">
								<span className="hide-on-small-only">Placeholder Text</span>
							</h2>
							<br/>
							<br/>
							<br/>
						</div>
						<div>
							<Example />
						</div>
					</div>
				</div>
			</div>
		);
  }
}

export default Home;