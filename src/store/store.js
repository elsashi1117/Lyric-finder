import {createStore, compose, applyMiddleware} from 'redux';
import tracks from '../reducers/tracks';

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  tracks,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;