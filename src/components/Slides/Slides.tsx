'use client';

import styles from './Slides.module.scss';

import { useState, useEffect } from 'react';

import {
  NextButton,
  PrevButton,
  SlideImage,
} from 'components/index';
import Skeleton from 'react-loading-skeleton';
import Tooltip from '../Tooltip/Tooltip';

import { useKeenSlider } from 'keen-slider/react';
import { nanoid } from 'nanoid';
import 'react-loading-skeleton/dist/skeleton.css';
import 'keen-slider/keen-slider.min.css';

export default function Slides(props: SlidesDataModel) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    let cancelled = false;

    async function preloadImages() {
      await Promise.all(
        props.slides.map(
          slide =>
            new Promise<void>(resolve => {
              const img = new window.Image();

              img.src = slide.img;

              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        )
      );

      if (!cancelled) {
        setImagesLoaded(true);
      }
    }

    preloadImages();

    return () => {
      cancelled = true;
    };
  }, [props.slides]);

  return (
    <section className={styles.slides}>
      <div className={styles.slide__wrapper}>
        {!imagesLoaded && (
          <div className={styles.skeleton}>
            <Skeleton height={400} />
          </div>
        )}

        <div
          ref={sliderRef}
          className="keen-slider"
          style={{
            opacity: imagesLoaded ? 1 : 0,
            transition: 'opacity .2s',
          }}
        >
          {props.slides.map(slide => (
            <div
              key={slide.id}
              className={`keen-slider__slide ${styles.slide}`}
            >
              <SlideImage
                src={slide.img}
                alt={props.description}
                width={1900}
                height={900}
                className={styles.slide__image}
              />
            </div>
          ))}
        </div>

        {imagesLoaded && (
          <>
            {/* controls */}
            {/* dots */}
          </>
        )}
      </div>

      <p>{props.description}</p>
    </section>
  );
}
