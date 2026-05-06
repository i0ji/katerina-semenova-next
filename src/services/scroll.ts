export default function scrollToSide(direction: string) {
  if (typeof window === 'undefined') return;

  const scrollBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight+20,
      behavior: 'smooth',
    });
  };

  switch (direction) {
    case 'top':
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      break;

    case 'bottom':
      setTimeout(scrollBottom, 100);
      break;
  }
}
