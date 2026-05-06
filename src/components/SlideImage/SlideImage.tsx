import styles from './SlideImage.module.scss';
import 'react-loading-skeleton/dist/skeleton.css';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Skeleton from 'react-loading-skeleton';
import Image from 'next/image';

export function SlideImage({
  src,
  alt,
  width,
  height,
  className,
}) {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: 1880 / 1200,
        overflow: 'hidden',
      }}
      className={styles.slide_image}
    >
      {!loaded && (
        <Skeleton
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
          }}
        />
      )}
      {inView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onLoadingComplete={() => setLoaded(true)}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.1s ease-in-out',
          }}
        />
      )}
    </div>
  );
}
