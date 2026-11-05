export default function scrollToSide(direction: 'top' | 'bottom') {
  if (typeof window === 'undefined') return;
  const top = direction === 'top' ? 0 : document.documentElement.scrollHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}
