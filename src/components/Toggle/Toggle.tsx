import styles from './Toggle.module.scss';
import { useAppSelector } from '@/store/hooks';

export default function Toggle(props) {
  const themeMode = useAppSelector((state) => state.theme.mode);

  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        id="theme-toggle"
        checked={themeMode === 'dark'}
        onChange={props.handleToggle}
        aria-label="Переключить цветовую тему"
      />
      <label htmlFor="theme-toggle">
        {themeMode === 'dark' ? `светлая` : `тёмная`} тема
      </label>
    </div>
  );
}
