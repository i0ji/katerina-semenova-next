import styles from './Tooltip.module.scss';

export default function Tooltip({ description }: { description: string }) {
  return (
    <div className={styles.tooltip_mount}>
      <span>{description}</span>
    </div>
  );
}
