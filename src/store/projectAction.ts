import { AppDispatch } from './store';
import {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
} from './projectSlice';

// import { mockData } from '../../temp/mockData';

export const fetchProjects =
  () => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchProjectsStart());


      //OPTION MOCK DATA
      // if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
      //   await new Promise((res) => setTimeout(res, 500));

      //   const normalizedData = mockData.map((project) => ({
      //     ...project,
      //     slides: project.slides.map((slide) => ({
      //       ...slide,
      //       img: slide.img.startsWith('/')
      //         ? slide.img
      //         : `/${slide.img}`,
      //     })),
      //   }));

      //   dispatch(fetchProjectsSuccess(normalizedData));
      //   return;
      // }

      const res = await fetch(
        'https://katerinasemenova.ru/fetchData.php'
      );

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
