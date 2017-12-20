import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter as Router, Route } from 'react-router-dom';
// import reducers from './reducers';
import Home from './components/Home';
import Header from './components/Header/Header';
import About from './components/About';
import GreaterSeattleHikes from './components/GreaterSeattle';
import SeattleHikes from './components/Seattle';
import { requireAuth } from './utils/AuthService';
import Callback from './components/Callback';


const Root = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/seattle" component={SeattleHikes} />
                <Route path="/about" component={About} />
                <Route path="/greaterSeattle" component={GreaterSeattleHikes} onEnter={requireAuth} />
                <Route path="/callback" component={Callback} />
            </div>
        </Router>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
