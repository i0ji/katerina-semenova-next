import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
}

export function PrevButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button__prev}
      aria-label="Предыдущий слайд"
    />
  );
}

export function NextButton({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={styles.button__next}
      aria-label="Следующий слайд"
    />
  );
}
