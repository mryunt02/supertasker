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
      state.entities.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      state.entities.filter((task) => task.id !== action.payload.id);
    },
  },
});

tasksSlice.actions.addTask({
  id: '2',
  title: 'Task 1',
  user: '1',
  column: '1',
});
