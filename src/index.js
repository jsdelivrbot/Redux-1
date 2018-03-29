import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './reducers/index';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const store = createStore(RootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , document.getElementsByClassName('container')[0]
    );