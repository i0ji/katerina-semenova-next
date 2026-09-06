import Image from 'next/image';
import styles from './SlideImage.module.scss';

export function SlideImage({
  src,
  alt,
  width,
  height,
  className,
}) {
  return (
    <div className={styles.slide_image}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
}