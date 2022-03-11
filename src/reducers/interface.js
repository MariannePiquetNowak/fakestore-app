import { SWITCH_THEME } from '../actions/constants';

const initialState = {
  mode: 'light',
};

function interfaceReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return { ...state, mode: action.payload };

    default:
      return state;
  }
}

export default interfaceReducer;
