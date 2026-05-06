import styles from './Toggle.module.scss';
import { useAppSelector } from '@/store/hooks';

export default function Toggle(props) {
  const themeMode = useAppSelector((state) => state.theme.mode);

  return (
    <div className={styles.toggle}>
      <input type="checkbox" id="temp" onClick={props.handleToggle} />
      <label htmlFor="temp">
        {themeMode === 'dark' ? `светлая` : `тёмная`} тема
      </label>
    </div>
  );
}
