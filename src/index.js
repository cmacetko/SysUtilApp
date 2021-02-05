import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import GlobalSpinnerProvider from './auxiliar/Spinner/GlobalSpinnerProvider';

const store = createStore(() => [], {}, applyMiddleware());

import App from './app.js';

window.onload = () => {

    ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
			<GlobalSpinnerProvider>
				<App />
			</GlobalSpinnerProvider>
        </HashRouter>
    </Provider>, 
    document.getElementById('app'));

};