import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export type TaskState = {
  entities: Task[];
};

const initialState: TaskState = {
  entities: [],
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.unshift(action.payload);
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      state.entities.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice;
