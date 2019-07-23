import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchLocation from './SearchLocation';
import LocationResults from './Location-Results';

import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';


const history = createBrowserHistory();
ReactDOM.render(
    <Router history={history}>
        <Route exact path="/" component={SearchLocation} />
        <Route exact path="/:siteId/:methodPayment/:latitud/:longitud/:filter?" component={LocationResults} />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
