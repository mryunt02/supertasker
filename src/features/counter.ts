import { createAction } from '@reduxjs/toolkit';

type CounterState = {
  count: number;
};
type CounterAction =
  | { type: 'INCREMENT' | 'DECREMENT'; payload: number }
  | { type: 'RESET' };
const increment = createAction('INCREMENT', (amount: number) => {
  return {
    payload: amount,
  };
});
const incrementAction = increment(2);

export const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case increment.type:
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};
