import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ThemeModel = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
