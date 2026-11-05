'use client';

import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import scrollToSide from 'services/scroll';

import { setTheme, toggleTheme } from 'store/themeSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Toggle } from 'components/index';

export default function Header() {
  const [themeReady, setThemeReady] = useState(false);
  const themeMode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    let initialMode: ThemeModel['mode'] = 'light';
    try {
      const savedMode = window.localStorage.getItem('katerina-theme');
      if (savedMode === 'light' || savedMode === 'dark') {
        initialMode = savedMode;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        initialMode = 'dark';
      }
    } catch {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) initialMode = 'dark';
    }
    dispatch(setTheme(initialMode));
    setThemeReady(true);
  }, [dispatch]);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${themeMode}`);
    try {
      window.localStorage.setItem('katerina-theme', themeMode);
    } catch {
    }
  }, [themeMode, themeReady]);

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.name}
        aria-label="Прокрутить к низу страницы"
        onClick={() => scrollToSide('bottom')}
      >
        Катерина Семёнова
      </button>
      <Toggle handleToggle={handleToggleTheme} />
    </header>
  );
}
