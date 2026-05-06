import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    theme: themeReducer
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
