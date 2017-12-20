import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import { getGreaterSeattleData } from '../utils/hiking-api';

class GreaterSeattleHikes extends Component {

  constructor() {
    super();
    this.state = { trails: [] };
  }

  getGreaterSeattleHikes() {
    getGreaterSeattleData().then((trails) => {
      this.setState({ trails });
    });
  }

  componentDidMount() {
    this.getGreaterSeattleData();
  }

  render() {

    const { trails } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Greater Seattle Hikes</h3>
        <hr/>

        { trails.map((trail, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">#{ trail.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { trail.trail } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Get Access to More Hikes By Logging In</h2>
            <Link className="btn btn-lg btn-success" to='/'>Seattle Proper Hikes </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GreaterSeattleHikes;