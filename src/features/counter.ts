import { createAction } from '@reduxjs/toolkit';
import { create } from 'domain';

type CounterState = {
  count: number;
};

const increment = createAction('INCREMENT', (amount: number) => {
  return {
    payload: amount,
  };
});
export const decrement = createAction('DECREMENT', (amount: number) => {
  return {
    payload: amount,
  };
});
const reset = createAction('RESET');
type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

export const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case increment.type:
      return { ...state, count: state.count + action.payload };
    case decrement.type:
      return { ...state, count: state.count - action.payload };
    case reset.type:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
