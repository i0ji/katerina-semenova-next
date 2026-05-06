interface SlideModel {
  id: number;
  img: string;
}

interface SlidesDataModel {
  slides: Array<SlideModel>;
  description: string;
}

interface ProjectsStateModel {
  projects: SlidesDataModel[];
  error: string | null;
  pending: boolean;
  loaded: boolean;
}

interface ThemeModel {
  mode: 'light' | 'dark';
}
