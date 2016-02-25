import {
  increment,
  decrement,
} from '../ducks/counter';

function counterMapDispatch(dispatch, /*props*/){
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export {
  counterMapDispatch as default,
};
