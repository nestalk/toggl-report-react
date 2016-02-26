import React from 'react';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './configureStore';
import indexReducer from './reducers/indexReducer';
import '../css/main.css';
import {getStorageData} from './actions';

import Report from './components/reportComponent';
import Filter from './components/filterComponent';

const store = configureStore(indexReducer);
store.dispatch(getStorageData());

render(
    <Provider store={store}>
        <section>
            <h1>Toggl Report Using React.js</h1>
            <Filter />
            <Report />
        </section>
    </Provider>,
    document.getElementById('app')
);
