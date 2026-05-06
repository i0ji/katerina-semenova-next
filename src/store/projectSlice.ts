import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ProjectsStateModel = {
  projects: [] as SlidesDataModel[],
  error: null,
  pending: false,
  loaded: false,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    fetchProjectsStart(state) {
      state.pending = true;
      state.error = null;
      state.loaded = false;
    },
    fetchProjectsSuccess(
      state,
      action: PayloadAction<SlidesDataModel[]>
    ) {
      state.projects = action.payload;
      state.pending = false;
      state.loaded = true;
      state.error = null;
    },
    fetchProjectsFailure(state, action: PayloadAction<string>) {
      state.pending = false;
      state.error = action.payload;
      state.loaded = false;
    },
    clearProjects(state) {
      state.projects = [];
      state.error = null;
      state.pending = false;
      state.loaded = false;
    },
  },
});

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  clearProjects,
} = projectsSlice.actions;

export default projectsSlice.reducer;
