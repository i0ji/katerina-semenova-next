interface SlideModel {
  id: number;
  img: string;
}

interface SlidesDataModel {
  slides: Array<SlideModel>;
  description: string;
}

interface ThemeModel {
  mode: 'light' | 'dark';
}
