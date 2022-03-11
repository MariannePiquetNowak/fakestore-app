import { ADD_PRODUCT } from '../actions/constants';
import { nanoid } from 'nanoid';

const initialState = [
  {
    id: nanoid(),
    product: {},
    quantity: 0,
  },
];
// { id: idunique, product: { .... }, quantity: 2 }

function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:

    default:
      return state;
  }
}

export default basketReducer;
