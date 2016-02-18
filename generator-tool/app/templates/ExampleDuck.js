import { createAction } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const reducer = {
  [INCREMENT]: (state) => {
    return state + 1;
  },
  [DECREMENT]: (state) => {
    return state - 1;
  }
}

export default reducer;
