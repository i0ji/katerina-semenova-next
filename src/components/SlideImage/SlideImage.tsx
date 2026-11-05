import Image from 'next/image';
import type { ImageProps } from 'next/image';
import styles from './SlideImage.module.scss';

type SlideImageProps = Pick<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'className' | 'priority'>;

export function SlideImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: SlideImageProps) {
  return (
    <div className={styles.slide_image}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
      />
    </div>
  );
}
