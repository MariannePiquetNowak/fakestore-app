import { combineReducers, createStore } from 'redux';

import interfaceReducer from '../reducers/interface';

const rootReducer = combineReducers({
  interface: interfaceReducer,
  // user: userReducer
  // basket: basketReducer
});

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
