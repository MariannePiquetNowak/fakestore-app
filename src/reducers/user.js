import { ADD_INFOS } from '../actions/constants';

const initialState = {
  firstname: '',
  lastname: '',
  mail: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INFOS:
      //   const obj = action.payload;

      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
