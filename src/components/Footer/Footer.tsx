'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Footer.module.scss';
import scrollToSide from 'services/scroll';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const bottomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = bottomRef.current;
    const checkPageBottom = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setShowButton(atBottom);
    };

    if (!node || !('IntersectionObserver' in window)) {
      window.addEventListener('scroll', checkPageBottom, { passive: true });
      window.addEventListener('resize', checkPageBottom);
      checkPageBottom();
      return () => {
        window.removeEventListener('scroll', checkPageBottom);
        window.removeEventListener('resize', checkPageBottom);
      };
    }

    const observer = new IntersectionObserver(([entry]) => {
      setShowButton(entry.isIntersecting);
    }, { threshold: 0, rootMargin: '0px 0px 2px 0px' });
    observer.observe(node);
    window.addEventListener('resize', checkPageBottom, { passive: true });
    checkPageBottom();
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkPageBottom);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <hr />

      <div className={styles.footer__about}>
        <h4>Катерина</h4>
        <article>
          Графический дизайнер с&nbsp;6-летним опытом. На&nbsp;данный момент
          занимаюсь разработкой и&nbsp;поддержкой фирменных стилей, навигации,
          созданием key visual, POS&nbsp;-&nbsp;материалов, полиграфической
          продукции для&nbsp;отелей, бизнес-центров
          и&nbsp;торговых&nbsp;центров.
          <br />
          <br />
          В 2017&nbsp;году получила высшее образование в&nbsp;Национальном
          Институте Дизайна по&nbsp;направлению «Графический дизайн».
          <br />
          <br />
          Участвовала в&nbsp;улучшении функционала инструмента Поиск
          для&nbsp;приложения Иви в&nbsp;процессе прохождения годового курса
          «UX/UI: дизайн цифровых продуктов». Ознакомиться с&nbsp;проектом можно
          на&nbsp;
          <a href="https://www.behance.net/gallery/182271937/Search-Online-cinema-IVI">
            Behance
          </a>
          .
        </article>
      </div>

      <hr />
      <div className={styles.footer__contacts}>
        <h4>Контакты</h4>
        <div>
          <p>
            <a href="tel:+79055386075">8 905 538 60 75</a>
          </p>
          <p>
            <a href="mailto:KaterinaSemenovaV@ya.ru">KaterinaSemenovaV@ya.ru</a>
          </p>
          <p>
            <a href="https://t.me/KateSemenovaV">@KateSemenovaV</a>
          </p>
          <p>
            <a href="https://www.behance.net/KateMojojo">
              Behance/KateSemenova
            </a>
          </p>
        </div>

        <button
          id="bottomScroll"
          type="button"
          aria-label="Наверх"
          onClick={() => scrollToSide('top')}
          className={`${styles.scroll_button} ${showButton ? styles.show : ''}`}
        >
          ↑
        </button>
      </div>
      <span ref={bottomRef} className={styles.bottomSentinel} aria-hidden="true" />
    </footer>
  );
}
