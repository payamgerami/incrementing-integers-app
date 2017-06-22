import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import Routes from './routes';
import { Router, browserHistory } from 'react-router';

ReactDOM.render(
    <Router history={browserHistory} routes={Routes} />,
    document.getElementById('root'));

registerServiceWorker();