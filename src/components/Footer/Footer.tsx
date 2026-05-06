'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Footer.module.scss';
import scrollToSide from 'services/scroll';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const contactsRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const scrollThreshold = 5;
      const isBottomReached =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - scrollThreshold;
      setShowButton(isBottomReached);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

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
      <div className={styles.footer__contacts} ref={contactsRef}>
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
          onClick={() => scrollToSide('top')}
          className={`${styles.scroll_button} ${showButton ? styles.show : ''}`}
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
