import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 

const store = createStore(() => [], {}, applyMiddleware());

import App from './app.js';

window.onload = () => {

    ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, 
    document.getElementById('app'));

};