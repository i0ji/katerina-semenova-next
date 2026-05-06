'use client';

import { useEffect } from 'react';

const YM_COUNTER_ID = 94167063;

export default function Metrics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://mc.yandex.ru/metrika/tag.js`;
    script.async = true;
    document.head.appendChild(script);

    window[`ym`] =
      window[`ym`] ||
      function (...args) {
        (window[`ym`].a = window[`ym`].a || []).push(args);
      };
    window[`ym`](YM_COUNTER_ID, 'init', {
      defer: true,
      webvisor: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true
    });

    window[`ym`](
      YM_COUNTER_ID,
      'hit',
      window.location.pathname + window.location.search
    );

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
