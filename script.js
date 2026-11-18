const openButton = document.getElementById('openLetter');
const letter = document.getElementById('letter');
const heartLayer = document.querySelector('.floating-hearts');

openButton.addEventListener('click', () => {
  const isOpen = letter.classList.toggle('show');
  letter.setAttribute('aria-hidden', String(!isOpen));
  openButton.textContent = isOpen ? 'Đọc lại lời nhắn 💗' : 'Mở lời nhắn của em 💌';
  if (isOpen) {
    for (let i = 0; i < 24; i++) createHeart();
    letter.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = ['♥', '♡', '💕', '💗'][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (14 + Math.random() * 22) + 'px';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  heartLayer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
}
setInterval(() => { if (!document.hidden) createHeart(); }, 1100);
