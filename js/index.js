require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import * as actions from './actions/index';
import * as reducers from './reducers/index';

console.log(reducers.repositoryReducer(undefined, actions.addRepository('myRepository')));
console.log(actions.addRepository('myRepository'));
/*const lists = ["Hot List", "Warm List", "Cold List"];

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="The Board" lists={lists} />, document.getElementById('app'))
);*/