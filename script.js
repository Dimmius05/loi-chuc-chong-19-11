const discover = document.getElementById('discover');
const openLetter = document.getElementById('openLetter');
const letter = document.getElementById('letter');

discover.addEventListener('click', () => {
  document.getElementById('message').scrollIntoView({behavior:'smooth'});
});

openLetter.addEventListener('click', () => {
  const isVisible = letter.classList.toggle('visible');
  letter.setAttribute('aria-hidden', String(!isVisible));
  openLetter.innerHTML = isVisible ? 'Đóng lá thư <span>↗</span>' : 'Mở lá thư của em <span>↗</span>';
  if (isVisible) {
    setTimeout(() => letter.scrollIntoView({behavior:'smooth', block:'center'}), 100);
  }
});
