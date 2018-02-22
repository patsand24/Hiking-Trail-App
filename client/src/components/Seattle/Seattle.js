import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { getSeattleData } from '../../utils/hiking-api';



import './Seattle.css';

class SeattleHikes extends Component {
  constructor() {
    super()
    this.state = { trails: [] };
  }

  getSeattleHikes() {
    getSeattleData().then((trails) => {
      this.setState({ trails });
    });
  }

  componentDidMount() {
    this.getSeattleHikes();
  }

  render() {

    const { trails }  = this.state;

    return (
      <div>
        <Header />
        <h3 className="text-center">Seattle Proper Hikes</h3>
        <hr/>

        { trails.map((trail, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn"><Link to="/api/seattle/details">Details</Link></span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { trail.trailName } </p>
                    <img src={trail.image} />
                  </div>
                </div>
              </div>
          ))}

        {/* <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Get Access to More Hikes By Logging In</h2>
          </div>
        </div> */}

        <div className="col-sm-12">
            <div className="jumbotron text-center">
              <h2>View Greater Seattle Hikes</h2>
              <Link className="btn btn-lg btn-success" to='/greaterSeattle'> Greater Seattle Hikes </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default SeattleHikes;