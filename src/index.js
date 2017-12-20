import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import reducers from './reducers';
import Home from './components/Home';
import Header from './components/Header/Header';
import About from './components/About';
import GreaterSeattleHikes from './components/GreaterSeattle';
import SeattleHikes from './components/Seattle';


const Root = () => {
    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));
