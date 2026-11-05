'use client';

import styles from './Slides.module.scss';

import { useState, useEffect, useRef } from 'react';

import { NextButton, PrevButton, SlideImage } from 'components/index';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const PRELOAD_WINDOW = 3;
const MAX_PARALLEL_IMAGE_LOADS = 3;
const imageLoads = new Map<string, Promise<boolean>>();
const imageQueue: Array<{
  src: string;
  priority: boolean;
  resolve: (loaded: boolean) => void;
}> = [];
let activeImageLoads = 0;

function pumpImageQueue() {
  while (activeImageLoads < MAX_PARALLEL_IMAGE_LOADS && imageQueue.length > 0) {
    const task = imageQueue.shift()!;
    activeImageLoads += 1;
    const image = new window.Image();
    let settled = false;
    const finish = async (loaded: boolean) => {
      if (settled) return;
      settled = true;
      if (loaded && typeof image.decode === 'function') {
        try { await image.decode(); } catch {}
      }
      task.resolve(loaded);
      activeImageLoads -= 1;
      pumpImageQueue();
    };

    image.decoding = 'async';
    if (task.priority) image.fetchPriority = 'high';
    image.onload = () => { void finish(true); };
    image.onerror = () => { void finish(false); };
    image.src = task.src;
    if (image.complete) void finish(image.naturalWidth > 0);
  }
}

function preloadImage(src: string, priority = false) {
  const existing = imageLoads.get(src);
  if (existing) return existing;
  const promise = new Promise<boolean>((resolve) => {
    const task = { src, priority, resolve };
    if (priority) imageQueue.unshift(task);
    else imageQueue.push(task);
    pumpImageQueue();
  });
  imageLoads.set(src, promise);
  return promise;
}

export default function Slides(props: SlidesDataModel & { isFirstProject?: boolean }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [groupReady, setGroupReady] = useState(props.isFirstProject === true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      setGroupReady(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setGroupReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '900px 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!groupReady || props.slides.length === 0) return;
    let cancelled = false;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    const useSmallBatch = connection?.saveData === true ||
      connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g';
    const batchSize = Math.min(useSmallBatch ? 2 : PRELOAD_WINDOW, props.slides.length);
    for (let offset = 0; offset < batchSize; offset += 1) {
      const slide = props.slides[(currentSlide + offset) % props.slides.length];
      preloadImage(slide.img, props.isFirstProject === true && currentSlide === 0 && offset === 0)
        .then((loaded) => {
          if (!cancelled) setLoadedImages((previous) => ({ ...previous, [slide.img]: loaded }));
        });
    }
    return () => { cancelled = true; };
  }, [groupReady, currentSlide, props.slides, props.isFirstProject]);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 0 },
    defaultAnimation: {
      duration: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 460,
    },
    drag: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <section ref={sectionRef} className={styles.slides}>
      <div
        className={styles.slide__wrapper}
        role="region"
        aria-roledescription="карусель"
        aria-label={props.description}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            slider.current?.prev();
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            slider.current?.next();
          }
        }}
      >
        {loadedImages[props.slides[currentSlide]?.img] === undefined && (
          <div className={styles.skeleton} aria-hidden="true">
            <span />
          </div>
        )}
        {loadedImages[props.slides[currentSlide]?.img] === false && (
          <div className={styles.imageError} role="status">Не удалось загрузить изображение</div>
        )}

        <div
          ref={sliderRef}
          className="keen-slider"
          style={{
            opacity: 1,
          }}
        >
          {props.slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`keen-slider__slide ${styles.slide} ${currentSlide === index ? styles.active : ''}`}
              aria-hidden={currentSlide !== index}
            >
              {loadedImages[slide.img] === true && (
                <SlideImage
                  src={slide.img}
                  alt={`${props.description}, изображение ${index + 1}`}
                  width={1900}
                  height={900}
                  className={styles.slide__image}
                  priority={props.isFirstProject === true && index === 0}
                />
              )}
            </div>
          ))}
        </div>

        {props.slides.length > 1 && (
          <>
            <div className={styles.controls}>
              <PrevButton onClick={() => slider.current?.prev()} />
              <NextButton onClick={() => slider.current?.next()} />
            </div>
            <div className={styles.pagination} aria-label={`Слайд ${currentSlide + 1} из ${props.slides.length}`}>
              {props.slides.map((slide, index) => (
                <button key={slide.id} type="button" aria-label={`Перейти к слайду ${index + 1}`} aria-current={currentSlide === index ? 'true' : undefined} onClick={() => slider.current?.moveToIdx(index)} />
              ))}
            </div>
          </>
        )}
      </div>

      <p>{props.description}</p>
    </section>
  );
}
