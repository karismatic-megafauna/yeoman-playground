import { createSelector } from 'reselect';

const countSelector = state => {
  return state.counter;
}

export {
  countSelector as default,
};
