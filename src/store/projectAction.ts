import { AppDispatch } from './store';
import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from './projectSlice';

export const fetchProjects = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchProjectsStart());

    const res = await fetch('https://katerinasemenova.ru/fetchData.php');

    if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
    const data: SlidesDataModel[] = await res.json();
    dispatch(fetchProjectsSuccess(data));
  } catch (error: unknown) {
    let message = 'Неизвестная ошибка';
    if (error instanceof Error) {
      message = error.message;
    }
    dispatch(fetchProjectsFailure(message));
  }
};
