import { combineReducers, createStore } from 'redux';

import interfaceReducer from '../reducers/interface';
import basketReducer from '../reducers/basket';
import userReducer from '../reducers/user';

const rootReducer = combineReducers({
  interface: interfaceReducer,
  basket: basketReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
