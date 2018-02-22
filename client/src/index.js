import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Home from './components/Home/Home';
import Users from './components/users';
import SignUp from './components/SignUp';
import RequireAuth from './components/HOC/RequireAuth';
import Header from './components/Header/Header';
import About from './components/About';
import GreaterSeattleHikes from './components/GreaterSeattle';
import SeattleHikes from './components/Seattle/Seattle';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/seattle" component={SeattleHikes} />
                <Route path="/about" component={About} />
                <Route path="/greaterSeattle" component={GreaterSeattleHikes} />
                <Route path="/signup" component={SignUp} />
            </div>
        </Router>
    </Provider>, document.getElementById('root')
    );
